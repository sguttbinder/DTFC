from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired
class ProjectForm(FlaskForm):
    title = StringField('title')
    completed = BooleanField('completed', default=False)
