const express =require('express');
const router=express.Router();
const user = require('../models/User');
//creating a User using :POST at "/api/auth/". Doesn't require Auth


router.post('/',async (req,res)=>{
    const userdata= new user(req.body);
    await userdata.save();
    res.send("data received");
})

module.exports = router;