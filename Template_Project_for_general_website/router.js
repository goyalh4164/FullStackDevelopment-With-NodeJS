const express = require("express");
const Router =express.Router();
const user=require("./database");

Router.get("/",(req,res)=>{
    res.send("hello")
})

module.exports = Router;