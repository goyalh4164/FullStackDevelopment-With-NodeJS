// console.log(typeof express)  -->function
const { query } = require('express')
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/greet',(req,res)=>{
  // console.log(req); req is very powerful information getter of the user
  let person='Guest';
  if(req.query.person)
  // http://localhost:3000/greet/?person=harsh_goyal
  person=req.query.person
  res.send("Good morning "+ person)      
})

app.listen(3000)