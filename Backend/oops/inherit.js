class Person{
    constructor(name, age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    
    talk() {
            console.log(`hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("Student class constructor");
        super(name, age);
        this.marks =  marks;
    }
}

let stud1 = new Student("Moon", 22, 98);
// Student class constructor
// inherit.js:3 Person class constructor
// stud1.talk()
// inherit.js:9 hi, my name is Moon