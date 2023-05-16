import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.listen(3000,()=>{
    console.log("Server connected");
})