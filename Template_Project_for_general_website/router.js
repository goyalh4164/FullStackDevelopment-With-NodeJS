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
        if(data.password === data.confpassword ){
            const savedata =await data.save();
            res.render("login")
        }
        else{
            res.status(400).send("Password Not Matched");
        }
    }
    catch(e){
        res.status(400).send(e);
    }
})

Router.post("/login",async(req,res)=>{
    try{
        const checkemail =req.body.email;
        const passworduser =req.body.password;
        const databasedata = await user.findOne({email : checkemail});
        if(databasedata!=null){
            if(databasedata.password === passworduser){
                res.render("contact");
            }
            else{
                res.status(400).send("Incorrect Password");
            }

        }
        else{ //if email is not present
            res.status(400).send("Incorrect email or Password");
        }
    }
    catch(e){
        res.status(400).send(error);
    }
})

module.exports = Router;