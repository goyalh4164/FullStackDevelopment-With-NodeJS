const express = require("express");
const router = express.Router();
const path =require("path");
const pathdir =path.join(__dirname,"public");

router.get("/",(req,res)=>{
    res.sendFile(pathdir+'/index.html');
})

module.exports = router;