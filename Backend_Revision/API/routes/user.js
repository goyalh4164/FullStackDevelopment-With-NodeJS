import express from "express";
import { User } from "../models/user";

const router = express.Router();

router.get("/users/all",async (req,res)=>{
    // displaying all the query
    //Example : http://localhost:3000/users/all?name=harsh&city=Delhi 
    console.log(req.query) // It returns the object
    // feteching all the users from the DATABASE
    const users = await User.find({});
    res.json({
        success: true,
        users : users
    })
})

router.post("/users/new", async (req,res)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name :name,
        email : email,
        password : password
    })
    // 201 is the status code for the created
    res.status(201).json({
        success : true,
        message : "Registered Succesfully"
    })
})

router.get("/userid/:id",async (req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success : true ,
        user :user
    })
})

export default router;