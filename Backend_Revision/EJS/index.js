import express from "express";
import path from "path"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// connecting to the local mongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/message")
.then(()=>{
    console.log("Database connected")
})
.catch((e)=>{
    console.error(e)
})

// Message schema
const messageSchema = new mongoose.Schema({
    name:String,
    email:String
});

// Modeling the schema
const Message = mongoose.model("Message",messageSchema)

const app = express();


//you need to mention the static folder path explicitely
// app.use(express.static(path.join(path.resolve(), 'public')));
// not working will look into it

// when you want to receive the encoded data from the post requests like incase of form
app.use(express.urlencoded({extended : true}))
// using cookie-parser
app.use(cookieParser())

// while using the EJS set the view-engine to the EJS
app.set("view engine","ejs")

// creating a middleware to check authentication of the user
const isAuthenticated = (req,res,next)=>{
    const {token} = req.cookies;
    if(token){
        next()
    }
    else{
        res.render("login")
    }
}


//simple ejs page rendering
app.get("/",isAuthenticated,(req,res)=>{
    res.render("logout")
})

//Handling post requests
app.post("/contact",async (req,res)=>{
    const messageData = {name : req.body.name , email : req.body.email};
    console.log(messageData)
    // added the data to the database
    await Message.create(messageData);
    res.redirect("/success")
})

//when you want to pass the data from backend to the EJS page
app.get("/name",(req,res)=>{
    res.render("data",{name : "Harsh"})
})

app.get("/success",(req,res)=>{
    res.render("success")
})

app.get("/users",(req,res)=>{
    res.json(users)
})
// Sending the static file
app.get("/file",(req,res)=>{
    // using it alternative to express.static
    const filePath = path.join(path.resolve(), "public", "index.html");
    res.sendFile(filePath);
})

app.get("/add",async (req,res)=>{
    await Message.create({name : "Harsh" , email: "sample@gmail.com"});
    res.send("Message sent")
})

// Login
app.get("/login",(req,res)=>{
    res.render("login")
})

// handling login post requests
app.post("/login",(req,res)=>{
    // setting the cookie
    res.cookie("token","iamin",
    {
        httpOnly:true,
        expires:new Date(Date.now()+60*1000)
    });

    res.redirect("/")
})

app.get("/logout",(req,res)=>{
    res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now())
    });
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log("Server running")
    console.log(path.join(path.resolve(),"public"))
})