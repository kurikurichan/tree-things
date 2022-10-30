import json
# d = {}
# with open("DATA.json", "w") as outfile:
#     json.dump(d, outfile)
location_data = {}
with open("Location_Data.json", "w") as outfile:
    json.dump(location_data, outfile)

class Student:
    # Student class adds to teacher, initiates teacher in json if teacher does not exist
    def __init__(self, teacher, trees, text, location):
        self.teacher=teacher
        self.trees = trees
        self.text = text
        self.location = location  
    def add_tree(self):
        f = open('Data.json')
        Data = json.load(f)
        if self.teacher in Data:
            Data[self.teacher]+=self.trees
        else:
            Data[self.teacher]= self.trees
        with open("DATA.json", "w") as outfile:
            json.dump(Data, outfile)
        f = open('Location_Data.json')

        DATA = json.load(f)
        if self.text not in DATA:
            DATA[self.text]= []
            DATA[self.text].append(self.location)          
        else:
            DATA[self.text].append(self.location)
                    
        
        with open("Location_Data.json", "w") as outfile:
            json.dump(DATA, outfile) 


        return


class Teacher:
    # Teacher class adds to school, pulls from student class, clears student values
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
    def clear_trees(self):
        g = open('School_DATA.json')
        Data = json.load(g)
        Data[self.school]=0
        with open("School_DATA.json", "w") as outfile:
            json.dump(Data, outfile)


s1 = Student('Terry', 10, 'new tree', (324.2342,100))
s2 = Student('Terry', 10, 'neww tree', (314.252,200))
s1.add_tree()
s2.add_tree()
s2.add_tree()
t = Teacher('Terry', 'James Woods High', 10)
t.add_tree()






