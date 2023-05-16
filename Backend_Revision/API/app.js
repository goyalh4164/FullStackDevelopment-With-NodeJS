import express from "express";
import mongoose, { mongo } from "mongoose";
import {router} from "./routes/user.js"

const app = express();

// Using middleware to accept data is JSON format
// Params are basically used to work with user query

app.use(express.json());
// use the import router from the user
// app.use(userRouter);

//connected with the mongoose
mongoose.connect("mongodb://127.0.0.1:27017/backendapi")
.then(()=>{
    console.log("Database connected")
})
.catch((e)=>{
    console.error(e)
})

app.get("/",(req,res)=>{
    res.send("you at root")
})


app.listen(3000, ()=>{
    console.log("Server is running")
});