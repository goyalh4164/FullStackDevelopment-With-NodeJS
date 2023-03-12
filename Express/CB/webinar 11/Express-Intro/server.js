const express =require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World')
})

function middleware1 (req,res ,next){
    console.log(req.url);
    res.send('kuchbhi')
}

app.get('/x',middleware1);

app.listen(3000,()=>{
    console.log('server started at localhost 3000')
})