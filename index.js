class Person {
    constructor(firstName, lastName, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.sick = false;
        this.onVacation = false;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    getInitials() {
        return `${this.firstName[0]}.${this.lastName[0]}.`;
    }

    updateHealth(isSick) {
        this.sick = isSick;
    }

    updateVacation(isOnVacation) {
        this.onVacation = isOnVacation;
    }
}

class ClassRoom {
    constructor(name, course) {
        this.name = name;
        this.course = course;
        this.instructor = null;
        this.TAs = [];
        this.students = [];
    }

    setTeacher(newTeacher) {
        this.instructor = newTeacher;
    }

    addTa(ta) {
        this.TAs.push(ta);
    }

    addStudent(student) {
        this.students.push(student);
    }

    rollCall() {
        let rollCallArray = [];
        for(let i = 0; i < this.students.length; i++) {
            let currentStudent = this.students[i];
            let present = true;
            let presentString = "here";
            if(currentStudent.sick === true || currentStudent.onVacation === true) {
                present = false;
                presentString = "not here";
            }
            
            rollCallArray.push(`${currentStudent.getFullName()} is ${presentString}`);
            
        }
        return rollCallArray;
    }
}

module.exports = {
    Person,
    ClassRoom
}