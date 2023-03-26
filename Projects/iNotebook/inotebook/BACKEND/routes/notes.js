const express =require('express');
const router=express.Router();
const fetchuser = require('../middleware/fetchUser');
const Notes = require('../models/Notes')
// 1.Get All the Notes using : Get ""
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    const notes =await Notes.find({user : req.user.id})
    res.json(notes);
})

module.exports = router;