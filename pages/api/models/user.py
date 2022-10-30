from .db import db
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    photo = db.Column(db.String(500), nullable=True)
    isTeacher = db.Column(db.Boolean, default=False, nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    treesPlanted = db.Column(db.Integer, server_default=0, nullable=True)

    notebooks = relationship("Notebook", back_populates="user", cascade= "all, delete")
    pages = relationship("Page", back_populates="user", cascade= "all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'photo': self.photo,
            ''
        }
