const connectToMongo = require('./db');
const express =require('express');

connectToMongo();

const app=express();
const port = 3000;

//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})