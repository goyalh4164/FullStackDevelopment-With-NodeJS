const express = require("express");
const app=express();
const mongoose= require("mongoose");

app.use(express.json()); //while using mongodb

mongoose.connect("mongodb://127.0.0.1:27017/nodejstutorial")
.then(()=>{
    console.log("connection succesfull")
})
.catch((e)=>{
    console.log(e);
})

const schema=new mongoose.Schema({
    name:String
})

const user = mongoose.model("user",schema);

//sending the data
app.post("/",async (req,res)=>{
    try{
 
        const senddata = new user(req.body)
        const savedata = await senddata.save();
        res.send(savedata);
    }
    catch(error){
        res.status(404).send(error);
    }
})

//receiving the data
app.get("/user",async (req,res)=>{
    try{
        const getdata= await user.find({}); //bring the complete data
        res.send(getdata);
    }
    catch(error){
        console.log(error);
    }

})


//finding specific data from the mongodb

app.get("/user/:id",async (req,res)=>{
    try{
        const id=req.params.id;
        const getiddata= await user.findById({_id : id})
        res.send(getiddata);
    }
    catch(error){
        res.status(404).send(error);
    }
})

//updating the data
app.patch("/update/:id",async (req,res)=>{
    try{
        const id=req.params.id;
        const updatedata=await user.findByIdAndUpdate({_id :id},req.body,{new:true});
        res.send(updatedata);
    }
    catch(error){
        res.status(500).send(error);
    }
})

//deleting the data
app.delete("/delete/:id",async (req,res)=>{
    try{
        const id=req.params.id;
        const deletedata = await user.findByIdAndDelete({_id : id})
        res.send(deletedata);
    }
    catch(error){
        res.status(500).send(error);
    }
})

app.listen(3000,()=>{
    console.log("server succesfully created");
})