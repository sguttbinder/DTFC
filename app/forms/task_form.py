from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import Task
# Meant for validations
class TaskForm(FlaskForm):
    title = StringField('title')
    description = StringField('description')
    completed = BooleanField('completed', default=False)
