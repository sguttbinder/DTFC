from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Project, User, Task, db
# from app.api.project_routes.task_routes import task_routes
from app.forms import ProjectForm
from app.api.auth_routes import validation_errors_to_error_messages

project_routes = Blueprint('projects', __name__)
# project_routes.register_blueprint(task_routes, url_prefix='/<int:projectId>')
# Get Data on project


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

@project_routes.route('/')
def projects():
    projects = Project.query.all()
    # This gets put into the project array
    return {"projects": [project.to_dict() for project in projects]}


# @project_routes.route('/<int:projectId>', methods=['GET'])
# def display_project():
#     project = Project.query.all()
#     # This gets put into the project array
#     return {"projects": [project.to_dict() for project in projects]}


@project_routes.route('/', methods=['POST'])
def add_project():
    '''
    Create a project
    '''
    form = ProjectForm()  
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = Project(
            # Current user didn't work...
            userId=current_user.id,
            # userId=1,
            title=form.data['title'],
            completed=False
        )
        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    # This gets put into the project array
        # return {"projects": [project.to_dict() for project in projects]}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 500


#  Change a project details - PUT
# Never got here... couldn't figure out POST.
@project_routes.route("/<projectId>", methods=["PUT"])
def update_project(projectId):
    '''
    Updates a project's details
    '''
    project_to_update = Project.query.get(projectId)
    form = ProjectForm()
    # Do we need line below?
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        title = form.data['title']
        project_to_update.title = title

        db.session.commit()
        return {'message': 'Project Updated!'}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Delete Project – DELETE Route


@project_routes.route("/<int:projectId>/delete", methods=["POST"])
def delete_project(projectId):
    """
    Deletes a project
    """
    project_to_delete=Project.query.get(projectId)
    db.session.delete(project_to_delete)
    db.session.commit()
    return {'message': 'Project Deleted`!'}

    # This gets put into the project array
    # return {"projects": [project.to_dict() for project in projects]}
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 500


# How to do cascading deletes?


# GET api/projects/<int:project_id> – Displays information on project
# GET api/projects / – Displays information on all projects
# POST api/projects – Creates a new project
# PUT api/projects: project_id – Updates the name of an already created project.
