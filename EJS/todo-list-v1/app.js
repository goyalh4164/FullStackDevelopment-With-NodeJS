const express=require("express");
const bodyParser=require("body-parser")

const app=express();

var items=["Buy Food","Get Food","Eat Food"]  //making item global to remove the scope problem

app.set('view engine','ejs'); //setted ejs our engine

app.use(bodyParser.urlencoded({extended :true}))

//IMP:: Here we need multiple Files for different Weedays so we will send the files through the hpls of EJS
app.get("/",function(req,res){
    var today=new Date();
    var options={
        weekday : "long",
        day:"numeric",
        month:"long"
    };
    var day =today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindOfDay: day,newListItems :items});
})

app.post("/",function(req,res){
    item=req.body.newItem;  //saving the newItem    
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server at 3000 port")
})