const express = require("express");
const app = express();
const user=require("./database");
const port=3000;

app.listen(port,()=>{
    console.log("Connected Succesfully");
})