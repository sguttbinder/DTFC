from app.models import db, Task


def seed_tasks():

    task1 = Task(
        projectId=1,
        userId=1,
        title="The First Task",
        description="There's a lot that goes into an app. Get this done first!",
        completed=False
    )

    db.session.add(task1)

    task2 = Task(
        projectId=1,
        userId=1,
        title="The Second Task",
        description="There's a lot that goes into an app. Get this done first!",
        completed=False
    )
    db.session.add(task2)

    task3 = Task(
        projectId=1,
        userId=1,
        title="The Third Task",
        description="There's a lot that goes into an app. Get this done first!",
        completed=False
    )
    db.session.add(task3)
    
    db.session.commit()


def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
