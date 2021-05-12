from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Project, User, Task, db
from app.api.project_routes.task_routes import task_routes
# from app.forms import NewProjectButton
# Does this exist?
from app.api.auth_routes import validation_errors_to_error_messages

# Can we go over this line?
project_routes = Blueprint('projects', __name__)
# project_routes.register_blueprint(task_routes, url_prefix='/<int:projectId>')

# Get Data on project


@project_routes.route('/')
def projects():
    projects = Project.query.all()
    # This gets put into the project array
    return {"projects": [project.to_dict() for project in projects]}


@project_routes.route('/<int:projectId>', methods=['GET'])
def display_project():
    project = Project.query.all()
    # This gets put into the project array
    return {"projects": [project.to_dict() for project in projects]}


@project_routes.route('/create', methods=['POST'])
def create_project():
    form = NewProductButton()  # doesn't exist yet
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = Project(
            name=form.data['title'],
        )
        db.session.add(project)
        db.session.commit()
    # This gets put into the project array
        return {"projects": [project.to_dict() for project in projects]}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 500


#  Change a project details - PUT

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


@project_routes.route("/<projectId>", methods=["DELETE"])
# Is this correct?
def delete_project(projectId):
    """
    Deletes a project
    """
    project_to_delete = Project.query.get(projectId)
    db.session.delete(group_to_project)
    db.session.commit()
    return {'message': 'Project Deleted!'}

# How to do cascading deletes?


# GET api/projects/<int:project_id> – Displays information on project
# GET api/projects / – Displays information on all projects
# POST api/projects – Creates a new project
# PUT api/projects: project_id – Updates the name of an already created project.
