// // Factory function
// function PersonMaker(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1= new PersonMaker("Moon", 22);


// Constructor: doesn't return any thing bydefault & starts with Capital letter
function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk =  function () {
        console.log(`hi, my name is ${this.name}`);
}

let p1= new Person("Moon", 22); // p1 is an instance
let p2= new Person("Tuls", 23); // p2 is an instance