/*
    Author:     Jason Bruce
    Title:      Gradebook Objects JS
    Date:       Nov 7th, 2023
*/

//variable declarations
const DEF_GRADE = "U";
const students = [];

//student object constructor
function Student(student, grade) { 
    this.name = student; 
    this.grade = grade;
}

//adds a student to the array with "name" and a defualt grade of U
function addStudent(name) {
    students[students.length] = new Student(name, DEF_GRADE);
}

//removes student from array based on an index given from the row
function removeStudent(index) {
    if(index >= 0 && index < students.length) {
        students.splice(index, 1);
        return true;
    }

    return false; //student not removed
}

//changes grade of input name to input grade
function changeGrade(name, grade) {
    for(let i = 0; i != students.length; i++) {
        if(students[i].name == name){
            students[i].grade = grade;
        }
    }
}