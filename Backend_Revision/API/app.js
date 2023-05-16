import express from "express";
import mongoose, { mongo } from "mongoose";

const app = express();

// Using middleware to accept data is JSON format
// Params are basically used to work with user query

app.use(express.json());

//connected with the mongoose
mongoose.connect("mongodb://127.0.0.1:27017/backendapi")
.then(()=>{
    console.log("Database connected")
})
.catch((e)=>{
    console.error(e)
})

//Schema for the users
const schema = new mongoose.Schema({
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
app.get("/users/all",async (req,res)=>{
    // displaying all the query
    //Example : http://localhost:3000/users/all?name=harsh&city=Delhi 
    console.log(req.query) // It returns the object
    // feteching all the users from the DATABASE
    const users = await User.find({});
    res.json({
        success: true,
        users : users
    })
})

// Creating a new User
app.post("/users/new", async (req,res)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name :name,
        email : email,
        password : password
    })
    // 201 is the status code for the created
    res.status(201).json({
        success : true,
        message : "Registered Succesfully"
    })
})

// passing user id through params
// This is also known as dynamic URL
app.get("/userid/:id",async (req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success : true ,
        user :user
    })
})

app.listen(3000, ()=>{
    console.log("Server is running")
});