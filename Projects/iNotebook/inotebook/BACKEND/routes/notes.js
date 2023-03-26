const express =require('express');
const router=express.Router();
const fetchuser = require('../middleware/fetchUser');
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator'); //express validater
// 1.Get All the Notes using : Get "/api/notes/fetchallnotes"
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
        const note =await Note.find({user : req.user.id})
        res.json(note);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

// 2. Add a new note using : POST "/api/notes/addnote"
router.post('/addnote',fetchuser,[
    body('title','Enter a valid Title').isLength({min :3}),
    body('description','Enter a Description minimum of 5 characters').isLength({ min: 5 })],
        async (req,res)=>{
            try {
                //if there are error,return bad request and the errors
                const errors = validationResult(req);
                //if any validation error occurs
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                //if everything goes good
                const {title,description,tag} =req.body; //gathered information from the req.body
                const note = new Note({
                    title,description,tag,user : req.user.id  //created a note from the information
                })
                const savedNote =await note.save(); //saved the note
                res.json(savedNote)    //send the response
            } 
            catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
})


module.exports = router;