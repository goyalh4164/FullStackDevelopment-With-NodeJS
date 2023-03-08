const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//Defined the basic Schema
const fruitSchema =new mongoose.Schema({
  name :String,
  rating : Number,
  review :String
});

const Fruit = mongoose.model("Fruit",fruitSchema);  //mongoose will convert it into plural automatically. It is the name of the collection

const fruit=new Fruit({
  name:"Apple",
  rating : 7,
  review : "Good Fruit"
});

fruit.save();

//Creating one more schema for person
//Defined the basic Schema

const personSchema =new mongoose.Schema({
  name :String,
  age : Number
});

const Person = mongoose.model("Person",personSchema);  //it converts Person to plural form i.e people

const person =new Person({
  name:"Harsh",
  age:20
});

person.save();