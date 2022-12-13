// Note in JS you can even call the function earlier while defining it later
// This happens because there is a effect called hoisting in JS which before executing the file puts all the function definations at the above of the page and then memory get all the information about the function in the JS file
console.log(beta())
function alpha(){
    return 'A'
}
function beta(){
    return 'B'
}

// function like below are not hoisted because they are definedd using the let keyword if you call them before the decalaration then they will give u a error
// Hoisted slows the performance but it is important in big projects because there flow will not make problem
// use let instead of var just a advice
let gamma=function(){
    return 'C'
}
console.log(gamma())
// POLYMORPHISM
function area(height,width){
    // Making this function polymorphic in nature i.e it will calculate area of circle when one argument is only passed else area of rectangle
    if(width==undefined){
        return Math.PI *height * height
    }
    // This above code makes it polymorphic in nature
    console.log('height= ',height,'width= ',width)
    return height*width
}
console.log('area 3,4',area(3,4)) 

console.log('area 3',area(4)) 

// Note if statement will not execute if it has internal parameter =false,0,null,undefined
// you can not define same function again if it is then it will take the last defined function polyporfism takes inside the function only
// you can also call the function with more no. of parameters by using the arguments keyword 
// Basically arguments is the array of arguments
function hello(){
    console.log('Hello World'+' '+arguments[0]+' '+arguments[1])
}
hello(1,2)
hello('harsh','himanshu')