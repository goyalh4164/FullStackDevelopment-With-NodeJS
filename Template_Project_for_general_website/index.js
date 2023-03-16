const { urlencoded } = require("express");
const express = require("express");
const app = express();
const route = require("./router");
const port=3000;

app.use(express.json()); //to save the data in JSON form
app.use(express.urlencoded({extended : false})) //to save the data in JSON form

app.set("view engine","ejs")

app.use(route); //it will use the routes defined by the router in it's file
app.listen(port,()=>{
    console.log("Connected Succesfully");
})