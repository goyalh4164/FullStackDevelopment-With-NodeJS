const express=require("express");
const bodyParser=require("body-parser")

const app=express();

app.set('view engine','ejs'); //setted ejs our engine

//IMP:: Here we need multiple Files for different Weedays so we will send the files through the hpls of EJS
app.get("/",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();
    var dayList=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    currentDay=dayList[currentDay];
    res.render("list",{kindOfDay: currentDay});
})

app.listen(3000,function(){
    console.log("Server at 3000 port")
})