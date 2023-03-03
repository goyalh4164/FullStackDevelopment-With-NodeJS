const express=require("express");
const bodyParser=require("body-parser")

const app=express();

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
    
    res.render("list",{kindOfDay: day});
})

app.post("/",function(req,res){
    var item=req.body.newItem;
    console.log(item)
})

app.listen(3000,function(){
    console.log("Server at 3000 port")
})