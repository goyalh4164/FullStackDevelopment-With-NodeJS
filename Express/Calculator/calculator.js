const express=require("express");
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended: true})) //this line you have to use whenever you want to use body-parser in your object
app.get("/",function(req,res){
    // __dirname it gives the current folder in which the file is opened
    res.sendFile(__dirname+"/index.html")
})
// to give response to the form
app.post("/",function(req,res){
    console.log(req.body) //it is very useful to perform action on the upcoming data
    //the above output
    /*
    { num1: '27', num2: '63', submit: '' }
     */
    //Performing the calculation
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;

    res.send("Addition of the above numbers is "+ result);
})
app.listen(3000,function(){
    console.log("Server Started")
})