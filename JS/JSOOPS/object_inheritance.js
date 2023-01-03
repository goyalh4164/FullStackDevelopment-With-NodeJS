let a={p:10, q:'harsh', r:false}
//here object b inherited the object a but it is not showing it's data on console.log(b) it is coming out to be empty but we can access the object a data
let b=Object.create(a)
let c=Object.create(b)
console.log(a) 
console.log(b)  // --> Not showing the object a data but we can access it
console.log(b.q)  //it prints harsh
console.log(c.q)  //it prints harsh
b.q='nanclknlfn' // it creates q variable inside b
console.log(b) //object q comes
console.log(c.q)  //'nanclknlfn' nearest proto concept


