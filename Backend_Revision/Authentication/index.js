import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

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
app.get("/",async (req,res)=>{
    const {token} = req.cookies;
    if(token){
        // if token exist then checking is it a valid token
        const decoded = jwt.verify(token,"secretkey")
        console.log(decoded)
        // finding if the token contains the valid user from the database
        req.user = await User.findById(decoded._id);
        if(req.user){

            console.log(req.user)
            res.render("logout",{ email: req.user.email })
        }
        else{

            res.render("login")
        }
    }
    else{
        res.render("login")
    }
})

// POST request / page
app.post("/",async (req,res)=>{
    console.log(req.body)
    // storing the data into the model
    const user = await User.create(req.body)
    // creating token for more secured entry
    const token = jwt.sign({_id : user._id},"secretkey");
    console.log(token)
    // setting the cookie token equal to the jwt token
    res.cookie("token",token);
    res.render("logout",{ email: req.body.email })
})

// Clearing cookie on logout request
app.get("/logout",(req,res)=>{
    res.clearCookie('token')
    res.redirect("/")
})
app.listen(3000,()=>{
    console.log("Server running at port 3000")
})