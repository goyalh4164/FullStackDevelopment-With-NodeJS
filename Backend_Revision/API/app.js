import express from "express";
import mongoose, { mongo } from "mongoose";

const app = express();

//connected with the mongoose
mongoose.connect("mongodb://127.0.0.1:27017/backendapi")
.then(()=>{
    console.log("Database connected")
})
.catch((e)=>{
    console.error(e)
})

//Schema for the users
const schema = new mongoose.schema({
    name: String,
    email :String,
    password : String,
})

const User = mongoose.model("User",schema);

// Root endpoint
app.get("/",(req,res)=>{
    res.send("Testing")
})

// This will give all the users in the database
app.get("/users/all",(req,res)=>{
    res.json({
        success: true,

    })
})

app.listen(3000, ()=>{
    console.log("Server is running")
});