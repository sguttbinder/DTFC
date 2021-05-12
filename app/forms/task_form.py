from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError

# from app.models import User
from app.models import Task
# Meant for validations
class TaskForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = StringField('description')