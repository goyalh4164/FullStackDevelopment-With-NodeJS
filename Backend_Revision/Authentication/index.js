import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app=express();

app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

// connected to the mongoose
mongoose.connect("mongodb://127.0.0.1:27017/users")
.then(()=>{
    console.log("Database connected")
})
.catch((e)=>{
    console.error(e)
})

// User schema
const userSchema =new mongoose.Schema({
    email:String,
    password:String
})

// user model
const User = mongoose.model("User",userSchema);

// GET request login page
app.get("/",(req,res)=>{
    const {token} = req.cookies;
    if(token){
        res.render("logout")
    }
    else{
        res.render("login")
    }
})

// POST request login page
app.post("/login",async (req,res)=>{
    console.log(req.body)
    // storing the data into the model
    await User.create(req.body)
    res.cookie("token","loggedin");
    res.render("logout")
})

// Clearing cookie on logout request
app.get("/logout",(req,res)=>{
    res.clearCookie('token')
    res.redirect("/")
})
app.listen(3000,()=>{
    console.log("Server running at port 3000")
})