from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Project, User, Task, db
from app.forms import TaskForm
from app.api.auth_routes import validation_errors_to_error_messages

task_routes = Blueprint('tasks', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@task_routes.route('/')
def tasks(projectId):
    # model.query.QUERYTYPE
    tasks = Task.query.filter_by(projectId=projectId)
    # This gets put into the task array
    return {"tasks": [task.to_dict() for task in tasks]}
    

# @task_routes.route('/<int:id>', methods=["GET"])
# def get_task():
#     # model.query.QUERYTYPE
#     task_to_get = Task.query.get(taskId)
#     return task_to_get

# @task_routes.route('/<int:taskId>', methods=['POST'])
# def delete_task(taskId):
#     # model.query.QUERYTYPE
#     task_to_delete = Task.query.get(taskId)
#     db.session.delete(task_to_delete)
#     db.session.commit()
#     return {'message': 'Group Deleted!'}

@task_routes.route('/', methods=['POST'])
def create_tasks(projectId):
    '''
    Create a task within a project
    '''
    print(current_user.id, "--------")

    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        task = Task(
            userId=current_user.id,
            # userId=1,
            title=form.data['title'],
            description=form.data['description'],
            projectId=projectId,
            completed=False
        )
        db.session.add(task)
        db.session.commit()
        return task.to_dict()
    # return {'errors': validation_errors_to_error_messages}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 500


    

# @task_routes.route('/<int:projectId>', methods=['GET'])
# def display_project():
#     project = Project.query.all()
#     # This gets put into the project array
#     return {"projects": [project.to_dict() for project in tasks]}

# #  Change a project details - PUT

@task_routes.route("/<int:taskId>", methods=["PUT"])
def update_task(projectId, taskId):
    '''
    Updates a project's details
    '''
    task_to_update = Task.query.get(taskId)
    form = TaskForm()
    # Do we need line below?
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        title = form.data['title']
        description = form.data['description']
        completed = form.data['completed']
        task_to_update.title = title
        task_to_update.descrtiption = description
        task_to_update.completed = completed

        db.session.commit()
        return {'message': 'Task Updated!'}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@task_routes.route("/<int:taskId>/", methods=["DELETE"])
def delete_task(projectId, taskId):
# def delete_task(projectId, ''' taskId '''):
    """
    Deletes a task
    """
    task_to_delete = Task.query.get(taskId)
    db.session.delete(task_to_delete)
    db.session.commit()
    return {'message': 'Task Deleted`!'}

    # This gets put into the project array
    # return {"projects": [project.to_dict() for project in projects]}
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 500



# # GET api/projects/<int:project_id> – Displays information on project
# # GET api/projects / – Displays information on all projects
# # POST api/projects – Creates a new project
# # PUT api/projects/Niunt:project_id> – Updates the name of an already created project.
