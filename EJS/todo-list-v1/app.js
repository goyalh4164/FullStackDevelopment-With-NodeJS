const express=require("express");
const bodyParser=require("body-parser")

const app=express();

app.set('view engine','ejs'); //setted ejs our engine

//IMP:: Here we need multiple Files for different Weedays so we will send the files through the hpls of EJS
app.get("/",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();
    if(currentDay==0 || currentDay==6){
        res.send("<h1>Enjoy it's a weekend!</h1>");
    }  //( 0 for sunday)
    else{
        res.sendFile(__dirname+"/index.html")
    }
})

app.listen(3000,function(){
    console.log("Server at 3000 port")
})