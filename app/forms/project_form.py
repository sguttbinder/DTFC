from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError

# from app.models import User
from app.models import Project
# Meant for validations
class ProjectForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])