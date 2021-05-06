# Probably not needed for this project
# Create Read Update Delete (CRUD) Operations

from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)

# Grabs all users
@user_routes.route('/')
# So that you can't see just any project or task
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}

# Grabs a specific user
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
