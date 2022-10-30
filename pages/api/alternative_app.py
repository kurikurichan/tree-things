import json
# d = {}
# with open("DATA.json", "w") as outfile:
#     json.dump(d, outfile)
# school_data = {}
# with open("School_DATA.json", "w") as outfile:
#     json.dump(d, outfile)

class Student:
    def __init__(self, teacher, trees):
        self.teacher=teacher
        self.trees = trees
    def add_tree(self):
        f = open('Data.json')
        Data = json.load(f)
        if self.teacher in Data:
            Data[self.teacher]+=self.trees
        else:
            Data[self.teacher]= self.trees
        with open("DATA.json", "w") as outfile:
            json.dump(Data, outfile)
        return

class Teacher:
    def __init__(self, name,school, trees):
        self.name = name
        self.school = school
        self.trees = trees
    
    def add_tree(self):
        f = open('Data.json')
        Data = json.load(f)
        if self.name in Data:
            self.trees +=Data[self.name]
            Data[self.name]=0
        with open("DATA.json", "w") as outfile:
            json.dump(Data, outfile)
        
        g = open('School_DATA.json')
        Data = json.load(g)

        if self.school in Data:
            Data[self.school]+=self.trees

        else:
            Data[self.school]= self.trees

        with open("School_DATA.json", "w") as outfile:
            json.dump(Data, outfile)
        return

s = Student('Terry', 10)
s.add_tree()
t = Teacher('Terry', 'James Woods High', 10)
t.add_tree()






