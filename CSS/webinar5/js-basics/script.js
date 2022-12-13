// DATATYPES
console.log(13313,typeof 13313)
console.log(234234.5356,typeof 234234.5356)
console.log('a',typeof 'a')
console.log("harsh",typeof "harsh")
console.log(true,typeof true)
console.log(null,typeof null)
console.log(undefined,typeof undefined)
// you can any number of  arguments in the console.log
// Let's we have a sinple function
function a(){
    return 1;
}
// the aove code is just like
let b=function(){
    return 1;
}
// In JS you can treat functions as variables
// This below line(16) will print the function and type='function'
console.log(a,b,typeof a)
// this will print 1 and number as datatype because altimately we are giving it a number only
console.log(a(),typeof a())
// in JS function is also a type of datatype
// a() it means calling and a it means printing
console.log(b,typeof b)
// if any error occur at runtime then the further execution will be stoped of that file



