// . means current folder

const lib1 =require('./lib1')
console.log('hello world')

if(typeof window ===! 'undefined'){
    console.log('running in browser')
}
else{
    console.log('running in node')
}
// console.log(lib1) //contains all the imported objects
lib1.sayHello('Harsh')

setTimeout(()=>{
    console.log(lib1)
},1000)

//globalThis keyword works in both node and browser console it is used to find the global most scope

//conclusion you can update the exports later also even if it one time imported 