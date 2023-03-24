const express =require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    obj ={
        a:'hello',
        b : 7
    }
    //sending the json object
    res.json(obj);
})

module.exports = router;