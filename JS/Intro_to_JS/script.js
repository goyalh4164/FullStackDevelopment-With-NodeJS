//decalaration
let a=10;
//printing
console.log(a);
//array
//indexing occurs from zero only
let b=[1,2,3,4,5];
console.log(b);
console.log('Hello World');
//Variables,Arrays,Functions,Loops,classes,objects
c=20; //Global variable can be declared without let and var keyword also
var d=30; //Function scope
let e=50; //Block scope

//Function
function fun(){
    let a=5;
    if(a==5){
        //this b has scope just in the if statement
        let b=10;
        //this f can also be accesed outside the if but only in the function scope
        var f=7;
        console.log("Inside the block",b);
    }
    console.log("Outside the block",b);
    // var has a function scope...
    console.log("Outside the block value of f",f);
}
fun();
//let has a block scope and var has a function scope
// the function below can participate in Hoisting
function square_root(n){
    console.log("In first sqrt function")
    return Math.sqrt(n);
}
console.log(square_root(10));

// Function Hoisting
// This function can not participate in Hoisting
var sqrt_n=function(){
    console.log("In second sqrt function")
    return;
}
square_root(10);
sqrt_n(10);
//Arrays
let arr=["Apple","Mango","Guava"];
//to print the arr
console.log(arr);
//to print the firdt element of the array
console.log(arr[0]);
//to print the lenght of the array
//first way
console.log(arr.length);
//second way
console.log(arr["length"]);

//Iteration
for(let i=0;i<arr.length;i++){
    //It prints all the elements in the new line
    console.log(arr[i]);
}
//Add element in the last of the array
arr.push("Banana");
//priting again
for(let i=0;i<arr.length;i++){
    //It prints all the elements in the new line
    console.log(arr[i]);
}
//POP: this function will remove the last element from the array and also return it
arr.pop();
//To find the index of particular element...it follows linear seach....if element does not exist then it will return -1
// arr.indexOf("Mango");
console.log(arr.indexOf("Mango"))
// Remove elemnt from the front
// arr.shift();
console.log(arr.shift());
//add to front of the array
arr.unshift("Kiwi");




