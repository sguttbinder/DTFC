from app.models import db, User

def seed_users():

    demo = User(
        username='Demo', email='demo@aa.io',
        password='password',
        firstName='George',
        lastName='Clinton',
        profileImage='www.example.com'
    )

    db.session.add(demo)

    bob = User(
        username='Bob', email='bob@burgers.com',
        password='bunnyears',
        firstName='Bob',
        lastName='Burger',
        profileImage='www.example.com'
        )

    db.session.add(bob)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
