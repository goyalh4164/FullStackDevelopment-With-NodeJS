//Higher order functions(HOF): pass one function as argument into another function or return one function from another function
function greet(name){
    console.log('Hello',name)
}
function createGreeter(greeting){
    // here we treat name as a function
    function greet(name){
        console.log(greeting,name())
    }
    // but if you write return greet() then the line containing typeof will return undefined because greet is not returning anything it is void
    return greet
}
function getName(){
    return document.getElementById('namebox').value 
}
let g1=createGreeter('Good Morning')
let g2=createGreeter('Good Evening') 
console.log(typeof g1);

console.log(g1('Harsh'))
console.log(g1('Arnav'))
console.log(g2('Arnav'))
console.log(g2('Harsh'))
console.log(greet('Harsh'))
// Note we have two greet functions but they have different scope so there will be no conflict
