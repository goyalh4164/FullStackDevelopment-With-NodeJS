const express =require('express');
const router=express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator'); //express validater
const bcrypt = require('bcryptjs'); //using for encryption of the password
const jwt = require('jsonwebtoken'); //Token Generator
const JWT_SECRET ='HarshSignature' //with this we sign our web token
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
    const current_user=await User.findOne({email : req.body.email}); //finding the id of the current user
    const data ={
        user:{
            id : current_user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET); //signed the token
    res.json(authtoken); //send the token to the user
    }
    catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

//Authenticate a User using POST "/api/auth/login" . No login required
router.post('/login',[
    body('email','Enter a valid Email').isEmail(),body('password','Password cannot be blank').exists()],async (req,res)=>{
    const errors = validationResult(req);
    //if any validation error occurs
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // till here no validation error occurs
    const {email,password} =req.body; //extracted email and password from the req.body
    try{
        let user =await User.findOne({email}); //finding the user from the database
        //if user does not exist in the database
        if(!user){
            return res.status(400).json({error : "Please try to login with correct Credentials"})
        }
        //if the user exist then we are comparing the hashed password using bcrypt compare function
        const passwordCompare=await bcrypt.compare(password,user.password);
        //if the password didn't match then sending the bad request
        if(!passwordCompare){
            return res.status(400).json({error : "Please try to login with correct Credentials"})
        }
        //if everything goes good   
        const data ={
            user:{
                id : user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET); //signed the token
        res.json(authtoken); //send the token to the user
    }
    //if something unexpected occurs
    catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router;