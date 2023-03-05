const express=require("express");
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js")

const app=express();
//Remember after making array as const it is possible to push more items inside the array without any error
//But you can't push if you are declayering the brand new error as const
const items=["Buy Food","Get Food","Eat Food"]  //making item global to remove the scope problem
var workItems=[];

app.set('view engine','ejs'); //setted ejs our engine

app.use(bodyParser.urlencoded({extended :true}))
app.use(express.static("public"))

//IMP:: Here we need multiple Files for different Weedays so we will send the files through the hpls of EJS
app.get("/",function(req,res){
    
    // console.log(date); //it will print all the data that we will export from that particular module
    let day =date.getDate(); //created our own module
    console.log(date.getDay());  //working clearly providing day in the console window
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