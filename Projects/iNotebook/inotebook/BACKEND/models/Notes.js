const mongoose = require('mongoose');

const NotesSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, // it will act as foriegn key
        ref :'user' //taking the id refrence from the user model
    },
    title:{
        type : String,
        required : true
    },
    description:{
        type :String,
        required :true,
    },
    tag:{
        type :String,
        default : "General"
    },
    date:{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('notes',NotesSchema);