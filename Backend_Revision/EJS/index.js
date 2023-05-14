import express from "express";
import path from "path"

const app = express();

//you need to mention the static folder path explicitely
app.use(express.static(path.join(path.resolve(), 'public')));
// not working will look into it

// while using the EJS set the view-engine to the EJS
app.set("view engine","ejs")

//simple ejs page rendering
app.get("/",(req,res)=>{
    res.render("index");
})

//when you want to pass the data from backend to the EJS page
app.get("/name",(req,res)=>{
    res.render("data",{name : "Harsh"})
})

// Sending the static file
app.get("/file",(req,res)=>{
    // using it alternative to express.static
    const filePath = path.join(path.resolve(), "public", "index.html");
    res.sendFile(filePath);
})

app.listen(3000,()=>{
    console.log("Server running")
    console.log(path.join(path.resolve(),"public"))
})