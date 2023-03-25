const mongoose = require('mongoose');

const mongooseURI = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = ()=>{
    mongoose.connect(mongooseURI)
    .then(()=>{
        console.log("connection succesfull")
    })
    .catch((e)=>{
        console.log(e);
    })
}

module.exports =connectToMongo;
 

