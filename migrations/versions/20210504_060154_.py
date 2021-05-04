"""empty message

Revision ID: 4f30cae1934e
Revises: ffdc0a98111c
Create Date: 2021-05-04 06:01:54.467534

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4f30cae1934e'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('firstName', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('lastName', sa.String(length=255), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'lastName')
    op.drop_column('users', 'firstName')
    # ### end Alembic commands ###
