const express = require("express");
const app = express();
const route = require("./router");
const port=3000;

app.listen(port,()=>{
    console.log("Connected Succesfully");
})