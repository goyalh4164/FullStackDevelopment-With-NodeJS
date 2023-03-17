const express = require("express");
const { findOne } = require("./database");
const Router =express.Router();
const user=require("./database");
const bcrypt =require("bcryptjs")

Router.get("/",(req,res)=>{
    res.render("index")
})

Router.post("/register",async(req,res)=>{
    try{
        const data=new user(req.body);
        if(data.password === data.confpassword ){
            const emailvalidation = await user.findOne({email : data.email})
            if(emailvalidation){
                res.send("Email Already Exist ..Login Directly")
            }
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
//Took a different step from tutorial
Router.get("/login",(req,res)=>{
    res.render("login");
})

Router.post("/login",async(req,res)=>{
    try{
        const checkemail =req.body.email;
        const passworduser =req.body.password;
        const databasedata = await user.findOne({email : checkemail});
        const ismatch =await bcrypt.compare(passworduser,databasedata.password); //comparing the encryted password withthe given password
        if(databasedata!=null){
            if(ismatch){
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