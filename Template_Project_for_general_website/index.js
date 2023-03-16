const express = require("express");
const app = express();
const route = require("./router");
const port=3000;

app.use(route); //it will use the routes defined by the router in it's file
app.listen(port,()=>{
    console.log("Connected Succesfully");
})