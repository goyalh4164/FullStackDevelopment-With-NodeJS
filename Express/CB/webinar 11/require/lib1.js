function sayHello(name){
    console.log('Hello ',name);
}
// Every JS file is known as module 
//we can decide what to export from the module
console.log(module.exports)  

module.exports ={ sayHello }

console.log(module.exports)  

setTimeout(()=>{
    module.exports.omg = 'wow';
},1000)