const express=require("express");
const bodyParser=require("body-parser")

const app=express();

app.set('view engine','ejs'); //setted ejs our engine

//IMP:: Here we need multiple Files for different Weedays so we will send the files through the hpls of EJS
app.get("/",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();
    if(currentDay==6 || currentDay==0){
        currentDay="Weekend";
    }  //( 0 for sunday)
    else{
        currentDay="Weekday";
    }
    res.render("list",{kindOfDay: currentDay});
})

app.listen(3000,function(){
    console.log("Server at 3000 port")
})