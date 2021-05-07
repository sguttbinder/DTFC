from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Project

class LoginForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])