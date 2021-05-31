# JS Classes Assignment

You need to create two different classes:

1. Person
2. ClassRoom

## Person Class

Should have five properties:

- firstName -> String
- lastName -> String
- role -> String
- sick -> Boolean
- onVacation -> Boolean

Should have four methods:

- getFullName() -- returns a string of firstName + " " + lastName
- getInitials()
- updateHealth(isHealthy -> Boolean)
- updateVacation(onVacation -> Boolean)


## ClassRoom Class

Should have five properties:

- name
- course
- instructor
- TAs[]
- students[]

Should have methods:

- setTeacher(newTeacher -> Person Object): updates the .teacher property with the newTeacher parameter
- addTA(ta -> Person Object): adds ta to the property TAs which is an array
- addStudent(student -> Person Object): adds student to the property students which is an array
- rollCall(): -> loops through all the students in the student array and pushes a string on if the student is present or not 


## Using our classes together:

### Instantiate Person Objects

You need to instantiate 13 Person Objects:

- name: Paul Matthews role: instructor
- name: Avis Solomon role: TA
- name: Evelyn Holder role: TA
- name: Malinda Yu role: student
- name: Ezekiel Hendricks role: student
- name: Benton Dalton role: student
- name: Emory McKenzie role: student
- name: Ashlee Boone role: student
- name: Melissa McCarthy role: student
- name: Billy Le role: student
- name: Abram Garrett role: student
- name: Margret Williamson role: student
- name: Isiah Simmons role: student

### Instantiate ClassRoom Object

You need to instantiate 1 ClassRoom Object:

- name: "CCG2C.2"
- course: "LC CodeCamp"

### Add Person Objects to ClassRoom Object

using the instantiated classroom object you will need to invoke the following methods:

- setTeacher(personObject) - you need to pass in the Paul Matthews Person Object to this method to set the classroom.instructor property

- addTa(personObject) - you will need to invoke this method twice to add both of our TA Person objects to the classroom.TAs array (Avis Solomon, and Evelyn Holder are our TAs)

- addStudent(personObject) - you will need to invoke this method 10 times to add the 10 remaining Person objects to the classroom.students array

At this point in time check your expectations:

- you should have 1 Person Class
- you should have 1 ClassRoom Class
- you should have 12 Person Objects
- you should have 1 ClassRoom Object
- Your ClassRoom Object should have the following properties:
  - instructor -> Person (Paul Matthews)
  - TAs -> Array of Person Objects (Avis Solomon & Evelyn Holder)
  - students -> Array of Person Objects (the remaining Person objects)

#### Questions

How did you create the Classes?
  - conceptually why did you create the classes?
    - lots of objects to be created that all have the same properties and methods
  - what was the syntax you needed
    - class
    - class Name
    - class scope curly brackets: {}
    - constructor method
      - class properties
    - class methods
    - this keyword
  - what does the this keyword do when you are inside a class?

How did you create the Objects?
  - conceptually why did we instantiate objects from our classes?
    - organization (we have a class that dictates what each of our classes are)
    - repeatability (we have lots of objects of the same type that we needed to create)
    - consistency (every object we create from a class will have the same characteristics)
  - what was the syntax you needed to instantiate these objects?
    - new keyword & Class constructor

## Class rollCall

Now that our ClassRoom object is all setup call the rollCall function which should:

- loop through all the students in the classroom.students array and push into a new array if that student is present or not - return the array



### Bonus Missions

- expand RollCall -> have it print out whether the TAs are present
- expand RollCall -> have it print out if the instructor is present
- unit tests -> write unit tests for the class methods:
  - Student.getFullName()
  - Student.getInitials()
  - Student.updateHealth()
  - Student.updateVacation()
  - ClassRoom.setTeacher()
  - ClassRoom.addStudent()
  - ClassRoom.rollCall()
- modularize this code:
  - move the Person Class to its own file and export it
  - move the ClassRoom Class to its own file and export it
  - make sure to update your index.js and any tests files so they are importing the classes they need correctly