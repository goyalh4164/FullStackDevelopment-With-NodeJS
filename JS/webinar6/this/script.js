// Answer in context of C++/Java
// What does the keyword "this" mean,what does it refer to?
// In which places in code can we NOT use "this" ?
// In JS this can work also without object and class
// This refers to the place from where it is called
// when you write "this" in an empty JS file then it refers to the Global scope i.e Window 
function checkThis(){
    console.log(this);
}
checkThis(); //This will print window because we are calling it from the scope of windows
// Let's create a object
// In JS objects are created using key pair syntax
// Key is always a string not number
let obj={
    a:10,
    b:"harsh",
    c:true,
    d:function (){
        console.log(this); 
        
    },
    // placing object inside the object
    e:{
        l:234,
        m:"goyal",
        n:function (){
            console.log(this); 
        },
        
    }

}
// Basically "this" will point to the object from where it is being called
// it also depends on the console how we are calling the this keyword
//If you are calling the "this" function from the obj.functionname then the this keyword will point to the obj in which that function is stored else if you are stroing it in some variable and then you are calling it then it will depends on the place of calling from the function is called by the use of variable