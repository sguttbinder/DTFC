from app.models import db, Project

def seed_projects():

    project1 = Project(
        title='Test Project',
        completed=False,
        userId=2
    )
    db.session.add(project1)

    project2 = Project(
        title='Test Project 2',
        completed=False,
        userId=1
    )
    db.session.add(project2)


    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects      CASCADE;')
    db.session.commit()
