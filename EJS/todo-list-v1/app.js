const express=require("express");
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js")

const app=express();

var items=["Buy Food","Get Food","Eat Food"]  //making item global to remove the scope problem
var workItems=[];

app.set('view engine','ejs'); //setted ejs our engine

app.use(bodyParser.urlencoded({extended :true}))
app.use(express.static("public"))

//IMP:: Here we need multiple Files for different Weedays so we will send the files through the hpls of EJS
app.get("/",function(req,res){
    
    // console.log(date); //it will print all the data that we will export from that particular module
    let day =date(); //created our own module
    res.render("list",{listTitle: day,newListItems :items});
})

app.post("/",function(req,res){

    item=req.body.newItem;  //saving the newItem    
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    // console.log(req.body)
    
})

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",newListItems :workItems});
})  

app.post("/work",function(req,res){
    item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})


app.listen(3000,function(){
    console.log("Server at 3000 port")
})