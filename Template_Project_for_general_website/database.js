const mongoose = require('mongoose');
const bcrypt= require("bcryptjs")

mongoose.connect('mongodb://127.0.0.1:27017/project1')
.then(()=>{
    console.log("Connected to the database succesfuly");
})
.catch((e)=>{
    console.log(e);
})

const schema = new mongoose.Schema ({
    name:{
        type : String,
        required :true
    },
    email:{
        type : String,
        required :true
    },
    phone :{
        type :Number,
        required :true,
        unique :true
    },
    password :{
        type : String,
        required :true
    },
    confpassword:{
        type:String,
        required :true
    }
})

//this defines what we have to do before saving the data into the database
schema.pre("save",async function(next){
    //before saving the password we are encryping it with hash value of 10
    this.password =await bcrypt.hash(this.password,10); //this refers to the schema
})

const usermodel =mongoose.model("userdetail",schema);

module.exports = usermodel;