from .db import db

class Task(db.Model):
  __tablename__ = 'tasks'

  id = db.Column(db.Integer, primary_key=True)
  projectId = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.Text, nullable=True)
  completed = db.Column(db.Boolean,  default=False, nullable=False)

  def to_dict(self):
    return {
        "id": self.id,
        "projectId": self.projecctId,
        "userId": self.userId,
        "title": self.title,
        "description": self.description,
        "completed": self.completed
    }
