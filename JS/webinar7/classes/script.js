/*
  Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.--->from mdn
  Classes are introduced in JS in 2015 from ECMAscript(company that maintains the standard of the JS)
  Basically if you remove the classes from JS then it will still work because ultimately class are using Prototyping----->just classes make it easier to use prototypeing
*/
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //adding one function to the class
    //here we don't write function keyword we directly define it by it's name

    isAdult(){
        return this.age >=18;
    }


}
let p1=new Person('Harsh',19)
let p2=new Person('Vaibhav',17)

console.log(typeof Person) //function--> there will be no new datatype.....classes are implemented internally as functions
console.log(p1.__proto__ == Person.prototype)  //true--> just like str.__proto__ and String.prototype
console.log(p2.__proto__.__proto__ == Object.prototype) //true-->similar
//Some important point
//so whenever we create a class...then it's prototype is automatically created..... and that prototype inherits from the Object.prototype and the object of this class inherits from the class prototype
//Now class inheritance
 class Student extends Person{
    constructor(name,age,grade){
        //let's first run the constructor of the inherited class to store name and age using super keyword
        //calling super is necessary to access 'this' 
        super(name,age)
        //assigning the remaining values
        this.grade=grade
    }
 }

 let s1=new Student("Harry potter",13,5)
 let s2=new Student("Hermoine Granger",18,6)

 //Inheritance chain detection
 console.log(s1.__proto__ == Student.prototype)
 console.log(s1.__proto__.__proto__ == Person.prototype)
 console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)
//All the above console are True
//Object.prototype -> Person.prototype -> Student.prototype
// No inheritance between the classes (actually they are functions)

//i.e  Object  -x-> Person -x ->Student
 







