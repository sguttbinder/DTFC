from .db import db

class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  completed = db.Column(db.Boolean, default=False, nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey(
      'users.id'), nullable=False)
  user = db.relationship("User", back_populates="projects")

  def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "completed": self.completed,
        # Check this
        "userId": self.userId,
    }
