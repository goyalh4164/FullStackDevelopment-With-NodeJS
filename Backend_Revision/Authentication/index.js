import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app=express();

app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

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
app.post("/login",(req,res)=>{
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