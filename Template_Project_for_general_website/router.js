const express = require("express");
const { findOne } = require("./database");
const Router =express.Router();
const user=require("./database");

Router.get("/",(req,res)=>{
    res.render("index")
})

Router.post("/register",async(req,res)=>{
    try{
        const data=new user(req.body);
        const savedata =await data.save();
        res.render("login")
    }
    catch(e){
        res.status(400).send(error);
    }
})

Router.post("/login",async(req,res)=>{
    try{
        const checkemail =req.body.email;
        const databasedata = await user.findOne({email : checkemail});
        if(databasedata!=null){
            res.send(databasedata);
        }
        else{ //if email is not present
            res.status(400).send("Incorrect email");
        }
    }
    catch(e){
        res.status(400).send(error);
    }
})

module.exports = Router;