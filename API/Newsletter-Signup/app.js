const express= require("express");
const bodyParser=require("body-parser");
const request=require("request")

const app=express();

app.use(bodyParser.urlencoded({extended :true}))

app.use(express.static("public")); //To provide the access of our file to the public of our local system here we create a public folder and put file inside that for it's use

app.get("/",function(req,res){
    console.log("At SignUp Page"); //Tested Succesfully
    res.sendFile(__dirname+"/signup.html");
})
 
app.post("/",function(req,res){
    var firstName=req.body.firstName;
    var LastName=req.body.lastName;
    var Email=req.body.emailAddress;
    console.log(firstName);
    res.send("Submitted");
})

app.listen(3000,function(){
    console.log("Server runing on port 3000");
})