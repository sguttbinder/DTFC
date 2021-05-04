from .db import db

class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey(
      'users.id'), nullable=False)
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.Text, nullable=True)
  completed = db.Column(db.Boolean, nullable=False)

  def to_dict(self):
    return {
        "id": self.id,
        "userId": self.userId,
        "title": self.titleId,
        "description": self.description,
        "completed": self.completed,
    }
