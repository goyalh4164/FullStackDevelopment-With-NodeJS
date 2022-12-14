function outer(arg1){
    let var1=10;
    let x=10;
    console.log(arguments[0]);
    // This will print param1
    function inner(arg2){
        let var2=20;
        let x=20
        console.log(arg1,var1,arg2,var2,x);
        console.log(arguments[0]);
        // This will print param2
        // Arguments will show the arguments of the current function not the outer function
    }
    return inner;
}
let x=outer('Param1');

// typeof x=='Function'
x('Param2');
//Closures Scope-->  Whenever a function is born or created all the scopes that are available at the birth-place of the function are captured by the function and they are available inside the function till then inner function in the main memory.....This is infinite nestable inner most function has almost the scope......Also remember the fuunction takes the closet variable available to it if same name variable exist
// Think closure as the circle containing circle and each layer to be a function
// You can't accesss the "arguments" (i.e list of arguments of the outer function) ....because it acts as a keyword
