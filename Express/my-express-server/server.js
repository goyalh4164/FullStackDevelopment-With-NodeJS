const express=require("express");

const app =express();
app.get("/",function(request,response){  //    '/'  it means request at home page, the callback contains what we will give response on that request
    // console.log(request) // --> contains all the request parameters
    // Let's Send the response to the User
    response.send("<h1>Hello</h1>");
})
app.get("/contact",function(req,res){
    res.send("Contact me at :goyalh@gmail.com")
})
app.get("/about",function(req,res){
    res.send("hey I am Harsh ..Learning Backend")
})
app.get("/hobbies",function(req,res){
    res.send("<ul><li>coffee</li><li>tea</li></ul>")
})
app.listen(3000,function(){
    console.log("Server started on port 3000")
});
