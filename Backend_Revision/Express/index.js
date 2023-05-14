import express from "express";

// path module
import path from 'path'

//created the server/app 
const app = express();

//while writing methods see from the client prespective

//simple send request
app.get("/",(req,res)=>{
    res.send("Hello")
})

//sending the status code
app.get("/x",(req,res)=>{
    res.sendStatus(400)
})

// sending the json data
app.get("/data",(req,res)=>{
    res.json({
        succes : true,
        products : []
    })
})

// sendFile
app.get("/dummy",(req,res)=>{
    // path.resolve() is same as __dirname
    const pathlocation = path.resolve();
    res.sendFile(path.join(pathlocation,"/dummy.txt"))
})


// server is listenting
app.listen(5000,()=>{
    console.log("Server is working")
});