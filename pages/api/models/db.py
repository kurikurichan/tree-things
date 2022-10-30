from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, Text, Float, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

db = SQLAlchemy()

class TreeGroup(db.Model):
    __tablename__ = "treeGroups"

    id = Column(Integer, primary_key=True)
    userId = Column(Integer, db.ForeignKey("users.id"), nullable=False)
    description = Column(Text, nullable=True)
    address = Column(String(200), nullable=False)
    lat = Column(Float, nullable=True)
    lng = Column(Float, nullable=True)
    numOfTrees = Column(Integer, nullable=False)

    user = relationship("User", back_populates="treeGroups")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "description": self.description,
            "address": self.address,
            "lat": self.lat,
            "lng": self.lng,
            "numOfTrees": self.numOfTrees
        }

class Teacher(db.Model):
    __tablename__ = "teachers"

    id = Column(Integer, primary_key=True)
    userId = Column(Integer, db.ForeignKey("users.id"), nullable=False)
    schoolId = Column(Integer, db.ForeignKey("schools.id"), nullable=False)
    treeCount = Column(Integer, server_default=0, nullable=True)

    user = relationship("User", back_populates="teachers")
    school = relationship("School", back_populates="teachers")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "schoolId": self.schoolId,
            "treeCount": self.treeCount
        }


class School(db.Model):
    __tablename__ = "schools"

    id = Column(Integer, primary_key=True)
    userId = Column(Integer, db.ForeignKey("users.id"), nullable=False)
    schoolName = Column(String(100), nullable=False)
    treeCounter = Column(Integer, server_default=0, nullable=False)
    schoolType = Column(String, nullable=True) # Note: Options on frontend should be elementary, middle, highschool, college
    photo = Column(String, nullable=True)

    teacher = relationship("Teacher", back_populates="schools", cascade="all, delete")


    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "schoolName": self.schoolName,
            "treeCounter": self.treeCounter,
            "schoolType": self.schoolType,
            "photo": self.photo
        }