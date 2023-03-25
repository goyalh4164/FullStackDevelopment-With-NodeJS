const express =require('express');
const router=express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator'); //express validater
//creating a User using :POST at "/api/auth/". Doesn't require Auth



router.post('/',[body('email','Enter a valid Email').isEmail(),body('name','Enter a valid Name').isLength({ min: 5 }),body('password','Password must be atleast 5 characters').isLength({ min: 3 })],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }).then(()=>{
        User=> res.json(User);
    }).
    catch(err=> {
    console.log(err)
    res.json({error :'Please enter a unique value for email',message : err.message})}) //if duplicate email exist
    res.send('data received')
})

module.exports = router;