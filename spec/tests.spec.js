const indexObj = require('../index.js');

describe("testing person class", () => {

    it("getFullName() returns the proper name", () => {
        let person = new indexObj.Person("Paul", "Matthews", "instructor");
        expect(person.getFullName()).toEqual("Paul Matthews");
    });

    it("getInitials() returns the proper initials", () => {
        let person = new indexObj.Person("Paul", "Matthews", "instructor");
        expect(person.getInitials()).toEqual("P.M.");
    });

    it("updateHealth(true) updates the property correctly", () => {
        let person = new indexObj.Person("Paul", "Matthews", "instructor");
        expect(person.sick).toBeFalse();
        person.updateHealth(true);
        expect(person.sick).toBeTrue();
    });

    it("updateHealth(false) updates the property correctly", () => {
        let person = new indexObj.Person("Paul", "Matthews", "instructor");
        expect(person.sick).toBeFalse();
        person.updateHealth(false);
        expect(person.sick).toBeFalse();
    });

    it("updateVacation(true) updates the property correctly", () => {
        let person = new indexObj.Person("Paul", "Matthews", "instructor");
        expect(person.onVacation).toBeFalse();
        person.updateVacation(true);
        expect(person.onVacation).toBeTrue();
    });

    it("updateVacation(false) updates the property correctly", () => {
        let person = new indexObj.Person("Paul", "Matthews", "instructor");
        expect(person.onVacation).toBeFalse();
        person.updateVacation(false);
        expect(person.onVacation).toBeFalse();
    });

});

describe("testing the ClassRoom class", () => {

    it("setTeacher(personObject) update the property correctly"
    , () => {
        let person = new indexObj.Person("Paul", "Matthews", "instructor");
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        expect(classroom.instructor).toBeNull();
        classroom.setTeacher(person);
        expect(classroom.instructor).toBeDefined();
        expect(classroom.instructor.getFullName()).toEqual("Paul Matthews");
    });

    it("addTA(ta) updates the property correctly", () => {
        let person = new indexObj.Person("Avis", "Solomon", "ta");
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        expect(classroom.TAs).toEqual([]);
        expect(classroom.TAs.length).toEqual(0);
        classroom.addTa(person);
        expect(classroom.TAs.length).toEqual(1);
        expect(classroom.TAs[0].getFullName()).toEqual("Avis Solomon");
    });

    it("addStudent(student) updates the property correctly", () => {
        let person = new indexObj.Person("Malinda", "Yu", "student");
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        expect(classroom.students).toEqual([]);
        expect(classroom.students.length).toEqual(0);
        classroom.addStudent(person);
        expect(classroom.students.length).toEqual(1);
        expect(classroom.students[0].getFullName()).toEqual("Malinda Yu");
    });

    it("addStudent(student) updates properly when adding 2 students", () => {
        let person = new indexObj.Person("Ezekiel", "Hendricks", "student");
        let personTwo = new indexObj.Person("Benton", "Dalton", "student");
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        classroom.addStudent(person);
        classroom.addStudent(personTwo);
        expect(classroom.students.length).toEqual(2);
        expect(classroom.students[0].getFullName()).toEqual("Ezekiel Hendricks");
        expect(classroom.students[1].getFullName()).toEqual("Benton Dalton");
    });

    it("rollCall() returns an empty array if there are no students", () => {
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        expect(classroom.rollCall()).toEqual([]);
    });

    it("rollCall() returns an array with 2 elements if there are two students", () => {
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        classroom.addStudent(new indexObj.Person("Emory", "McKenzie"));
        classroom.addStudent(new indexObj.Person("Ashlee", "Boone"));
        let rollcall = classroom.rollCall();
        expect(rollcall.length).toEqual(2);
        expect(rollcall[0]).toEqual("Emory McKenzie is here");
        expect(rollcall[1]).toEqual("Ashlee Boone is here");
    });

    it("rollCall() returns proper response when a student is absent for sickness", () => {
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        let studentOne = new indexObj.Person("Tim", "Tom");
        let studentTwo = new indexObj.Person("Frid", "Fred");
        studentTwo.updateHealth(true);
        classroom.addStudent(studentOne);
        classroom.addStudent(studentTwo);
        const rollcall = classroom.rollCall();
        expect(rollcall[0]).toEqual("Tim Tom is here");
        expect(rollcall[1]).toEqual("Frid Fred is not here");
    });

});

describe("exercise full example test", () => {

    it("rollCall() for all 10 students", () => {
        let classroom = new indexObj.ClassRoom("CCG2C", "LC CodeCamp");
        classroom.addStudent(new indexObj.Person("Malinda", "Yu", "student"));
        classroom.addStudent(new indexObj.Person("Ezekiel", "Hendricks", "student")); 
        classroom.addStudent(new indexObj.Person("Benton", "Dalton", "student")); 
        classroom.addStudent(new indexObj.Person("Emory", "McKenzie", "student")); 
        classroom.addStudent(new indexObj.Person("Ashlee", "Boone", "student")); 
        classroom.addStudent(new indexObj.Person("Melissa", "McCarthy", "student")); 
        classroom.addStudent(new indexObj.Person("Billy", "Le", "student")); 
        classroom.addStudent(new indexObj.Person("Abram", "Garrett", "student")); 
        classroom.addStudent(new indexObj.Person("Margret", "Williamson", "student")); 
        classroom.addStudent(new indexObj.Person("Isiah", "Simmons", "student")); 

        classroom.students[3].updateHealth(true);
        classroom.students[6].updateVacation(true);

        const rollcall = classroom.rollCall();
        expect(rollcall[2]).toEqual("Benton Dalton is here");
        expect(rollcall[3]).toEqual("Emory McKenzie is not here");
        expect(rollcall[6]).toEqual("Billy Le is not here");
        expect(rollcall[9]).toEqual("Isiah Simmons is here");
    });

});