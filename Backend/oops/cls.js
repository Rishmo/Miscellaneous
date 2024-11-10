class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        //console.log(this);
    }
    
    talk() {
            console.log(`hi, my name is ${this.name}`);
    }
}

let p1= new Person("Moon", 22); 
let p2= new Person("Tuls", 23);

// p1.talk === p2.talk (true)