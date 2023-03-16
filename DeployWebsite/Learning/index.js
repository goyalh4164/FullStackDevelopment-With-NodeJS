const express = require("express");
const app = express();
const router =require("./router");

app.use(router); //import the router code whatever it is working inside it

app.listen(3000,()=>{
    console.log("server connected");
})