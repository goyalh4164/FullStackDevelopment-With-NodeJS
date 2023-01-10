let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am fullfilled")
        resolve(true) //promise either resolve or reject
        
    },5000)
})
let p2=new Promise((resolve,reject)=>{
    console.log("Promise is Pending")
    setTimeout(()=>{
        console.log("I am a promise and i am rejected")
        reject(new Error(" I am an Error"))
    },4000)
})
//all the promises run parallely and they take only 5 seconds to run simultaneosly
// .then is used to work when promise completely resolves
// .catch is used when error is thrown by the promise
//the value that comes here is catched from the argument passed in the resolve
//to get the value
p1.then((value)=>{
    console.log(value)
})
// when we are able to catch the error then our program work flow does not stops it continues to proceed further
//to catch the error
// p2.catch((error)=>{
//     console.log("Some error occured in p2")
// })
//you can write .then and .catch simultaneosly as you don't know exactly whether you will be able to complete the execution call or not.
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})