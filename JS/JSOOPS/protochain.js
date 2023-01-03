let a={p: 10,q: 'harsh',r:true}
console.log(a)
let b=Object.create(a)
console.log(b)
let c=Object.create(b)
console.log(c)
//__proto__  -->it gives the object from which it is inherited
console.log(c.__proto__ == b)
console.log(c.__proto__.__proto__ == a)
console.log(b.__proto__ == a)
console.log(c.__proto__.__proto__ == b.__proto__)
//All above are true

//standard way
// if you want to find out that 'b' was created from 'a' or not

console.log(a.isPrototypeOf(b))
console.log(a.isPrototypeOf(c))
console.log(b.isPrototypeOf(c))

//all above are true
console.log(a.isPrototypeOf(a))  //it gives false
//Using Prototype to change the object data from other objects
console.log(b)
console.log(a.r)
b.__proto__.r=false
console.log(a.r)
console.log(b)
//All other points are similar to previous lecture of prototypes

