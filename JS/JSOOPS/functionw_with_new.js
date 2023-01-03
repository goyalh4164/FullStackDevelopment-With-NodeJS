function Person(name,age){
    this.name=name;
    this.age=age
}
//new keyword creates a new functional object P by using function
let p=new Person('Harry Potter',20)
let p2=Person('John Doe',30) //when you don't use new keyword then it does not behave like a functional object
console.log('p -' +typeof p)
//to return the object in JSON
console.log('p -' + JSON.stringify(p));
console.log(p.name)
console.log(p.age)
console.log(typeof p2) //undefined
// console.log(p2.name)
// console.log(p2.age)

