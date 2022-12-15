let =str="Asdasd"                        //3 levels from null---------->because (str.__proto__.__proto__.__proto__)=null
let num= 233                             //3 levels from null 
let bool= true                           //3 levels from null 
let arr=[1,2,4,42]                       //3 levels from null 
let obj={a:10,b:'fnejnrf'}               //2 levels from null 
let fun=function(){console.log('yay!')}  //3 levels from null 

//if x and y are not primitive
// x==y : true <-- what does this mean?
//this means  they are refrence to the same object in memory
console.log('=================== types ===================')
console.log( 'typeof String ',typeof String) //-->function--> it is a function that creates string-->String('1')==1
console.log( 'typeof Boolean ' ,typeof Boolean)
console.log( 'typeof Number ' ,typeof Number)
console.log( 'typeof Array ' ,typeof Array)
console.log( 'typeof Object ' ,typeof Object)
console.log( 'typeof Function ' ,typeof Function)
//All of the above are Functions which create the datatypes of the above kind
//These all are Global function as you can access them by window.String,window.Object
//Some Important Results
console.log('=================== proto chain ===================')

console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

//Everything indirectly inherits from the same thing
// that obj is inherited from
//i.e in Javascript ,everything is essentially an Object
// Basically obj.__proto__ is the origin of everything because it inherits from the null--->This is root of JS

console.log('============Prototypes=====================')
console.log(obj.__proto__==Object.prototype)
console.log(str.__proto__==String.prototype)
console.log(num.__proto__==Number.prototype)
console.log(bool.__proto__==Boolean.prototype)
console.log(arr.__proto__==Array.prototype)
console.log(fun.__proto__==Function.prototype)
// typeof Obect.prototype--->"object"

//String.prototype inherits from Object.prototype
//all functions are object but not all objects are not functions 
// if there are two entities 'a' and 'b' have same proto then it is not necessary that we will get the same typeof of both the entities
// Prototypes are the blueprints.....basically prototypes are just like classes
//or a first or preliminary version of a device or vehicle from which other forms are developed:
//__proto__ is a hidden pointer which will point to the blueprint from it is created
// In JS objects and classes are two very different things...here everything is object
console.log(str.charAt(4))
console.log(typeof str.charAt)
let str2="harsh"
console.log(str.charAt == str2.charAt) //true -->since both are equal so it is clear they belong to the same refrence but where they exist to find that just do __proto__ again and and again untill you find undefined...where you find undefined .. from there previous level contains the function
// what will happen?
str.charAt = function () {return 'x'} //does not make a difference
//But this one makes difference
String.prototype.charAt=function() {return 'X'} //we can change the internal implementation of the JS by using the prototype...Basically Ghar me enter krke maarenge
console.log(str.charAt(1)) //gives 'X'
//String.prototype contains all default string functions
// like charAt, indexOf ,substring,slice,etc


//if you want to know where joining of array is occuring
Array.prototype.joinOriginal =Array.prototype.join

Array.prototype.join =function (){
    console.log('join called on',this)
    return this.joinOriginal(... arguments)
}




