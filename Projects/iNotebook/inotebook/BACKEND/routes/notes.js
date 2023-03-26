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

// 3.Update notes using PUT "/api/notes/updatenote". Login required
//for updating we use put request

router.put('/updatenote/:id',fetchuser,
        async (req,res)=>{
            const{title,description,tag}=req.body;
            //create a newNote object
            let newNote = {};
            if(title){newNote.title =title}
            if(description){newNote.description =description}
            if(tag){newNote.tag =tag}

            //find the note to be updated and update it
            let note =await Note.findById(req.params.id); //finding the note with the given id
            if(!note){return res.status(404).send("Not Found")}; //if no such note exist then error
            if(note.user.toString() !== req.user.id){  //if note exist then checking if it belongs to that user only
                return res.status(401).send("Not allowed");
            }
            //if all checks get's passed
            note =await Note.findByIdAndUpdate(req.params.id,{$set:newNote} ,{new :true})//replacing the old note with the new note
            res.json({note});
            
        })

module.exports = router;