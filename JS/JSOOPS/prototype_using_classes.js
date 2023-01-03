class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}

class Student extends Person{
    constructor(name,age,school){
        super(name,age) //uses Person
        this.school=school //uses own constructor
        // IMP Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
    }
}

let p=new Person('Harry Potter',15)
let s=new Student('Ron Weasley',16,'Hogwarts') //here student uses Person constructor first then its own
console.log(p)
console.log(s)