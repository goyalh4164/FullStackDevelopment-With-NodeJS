const express = require("express");
const Router =express.Router();
const user=require("./database");

Router.get("/",(req,res)=>{
    res.render("index")
})

module.exports = Router;