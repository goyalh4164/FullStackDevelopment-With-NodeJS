// Object Oriented Programming in Javascript
//allows to create objects without defining the class
//creating object without class
//One of way creating Javascript Object...this is known as (JSON)-->Javascript object Notation
let bird={
    x:100,
    y:20,
    color:"blue",
    eggs:[1,2,3,4],
    fly:function(){
        //This below line will throw error...if you want the variables inside the bird object then you have to use "this keyword"
        // console.log("Bird is flying",x,y);
        console.log("Bird is flying",this.x,this.y);
    }

};
console.log(typeof bird); //it prints object
//Iterating over the egss
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}
//using each loop
//it is the inbuilt function
bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
});
//Another way of creating objects
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}
// the above code is behaving like a class
//Now creating objects for fruits
let mango=new Fruit("sweet","Yellow");
let orange=new Fruit("sour","orange");
console.log(mango.color);
console.log(orange.color);
//Another way using the class keyword (ECMAScript 2015)
//Class Decalaration
// Not Hoisted
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}
//creating object
let f=new FruitClass("sour","green");

//Another way
//Class Expression
//Not Hoisted
let Fruitclass2=class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
    
}
//creating the object of the above class
let g=new Fruitclass2("very sweet","yellowish-orange");
console.log(g.taste);
//In classes HOISTING does not work