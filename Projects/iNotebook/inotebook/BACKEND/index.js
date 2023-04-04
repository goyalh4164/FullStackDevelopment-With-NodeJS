const connectToMongo = require('./db');
const express =require('express');
const cors = require('cors')
connectToMongo();

const app=express();
app.use(cors()) // to enable the transmission from port 3000 to external port 5000
const port = 5000;

app.use(express.json());  // to read the req of the user in json format

//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(port,()=>{
    console.log(`iNotebook backend listening at http://localhost:${port}`);
})