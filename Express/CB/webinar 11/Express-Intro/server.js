const express =require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World')
})

function middleware1 (req,res ,next){
    console.log(req.url);
    console.log("I am middleware 1")
    next(); //calling the next middleware on the stack
}

function middleware2 (req,res ,next){
    console.log(req.hostname);
    res.send('I am middleware 2')
}

app.get('/x',middleware1,middleware2);

app.listen(3000,()=>{
    console.log('server started at localhost 3000')
})