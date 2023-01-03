function Person(name,age){
    this.name=name
    this.age=age
    // this.isAdult =function (){return this.age>=18} console.log(p.isAdult == p2.isAdult) gives false because when we create new object from it then js treats the function inside different objects different because of the nearest prototype
}
//we are defining the prototype as inbuilt outside the function then this console.log(p.isAdult == p2.isAdult) comes out to be true
Person.prototype.isAdult=function(){return this.age >=18}
//declaring variable outside the function
Person.prototype

let p=new Person('Harry Potter',15)
let p2=new Person('John Doe',30)

console.log(p.isAdult())
console.log(p2.isAdult())
console.log(p.isAdult() == p2.isAdult())
console.log(p.isAdult == p2.isAdult)
