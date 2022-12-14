let obj1={
    a:10,
    b:20,
    c:30
};
let obj2=Object.create(obj1);
//Adding some data into obj2
obj2.p='ha'
obj2.q='rs'
obj2.r='hg'
//creating one more object for __proto__ understanding
let obj3=Object.create(obj2)
// Never use __proto__ keyword in the production code........Just use it for debugging
// Whenever the object is created then that object contains one field named __proto__  which contains the data of the object from which the current object is produced
// in the above example obj2.__proto__ = obj1
//searcing in objects
//steps

/*  obj2.a -->it will try to find a in obj2
           -->if not found,
           -->it will try to find it in obj2.__proto__
           -->if not found,
           -->it will try to find it in obj2.__proto__.__proto__
           -->....... and so on ...
           -->till .__proto__ becomes null
*/
