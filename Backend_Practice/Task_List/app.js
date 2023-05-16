import express from "express";
import mongoose from "mongoose";

const app = express();

// Connected with the database
mongoose.connect("mongodb://127.0.0.1:27017/tasklist").then(()=>{
    console.log("Database connected");
}).catch(()=>{
    console.log("Database Server Down");
})

// User Schema
const userSchema = new mongoose.Schema({
    Email:{
        type: String,
        required :true
    },
    Password:{
        type: String,
        required :true
    }
})

// Modeling the Schema
const User = mongoose.model("User",userSchema);

// Root Request
app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.listen(3000,()=>{
    console.log("Server connected");
})