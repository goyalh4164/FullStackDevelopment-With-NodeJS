const express =require('express');
const router=express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator'); //express validater
const bcrypt = require('bcryptjs'); //using for encryption of the password
//creating a User using :POST at "/api/auth/createuser". No login required



router.post('/createuser',[body('email','Enter a valid Email').isEmail(),body('name','Enter a valid Name').isLength({ min: 5 }),body('password','Password must be atleast 5 characters').isLength({ min: 3 })],async (req,res)=>{
    //if there are error,return bad request and the errors
    const errors = validationResult(req);
    //if any validation error occurs
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    //check whether the user with this email exists already
    let user =await User.findOne({email :req.body.email});
    //if user exist then return the bad request
    if(user){
        return res.status(400).json({error : "Sorry user with this email already exists"})
    }
    const salt=await bcrypt.genSalt(10); //salt for password more security if some user enters the common password available in the rainbow dictionary
    secPass =await bcrypt.hash(req.body.password,salt); //encrypted our password
    //if user does not exist then we add entry in db against it
    await User.create({
        name : req.body.name,
        email : req.body.email,
        password : secPass
    })
    //when validation is also passed and data is also received
    res.send('data received')
    }
    catch(error){
        console.error(error);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;