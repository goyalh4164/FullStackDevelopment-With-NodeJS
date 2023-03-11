// console.log(typeof express)  -->function
const { query } = require('express')
var express = require('express')

//to read from the req.body


var app = express()

app.use(express.urlencoded({extended :true}))

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

app.get('/form',(req,res)=>{
  res.sendFile(__dirname+'/files/form.html')
})

app.get('/:city/welcome',(req,res)=>{
  // here :city is behaving like variable route
  // req.params.city it contains the city 
  res.send('Welcome to this '+req.params.city + ' !');
})

app.post('/greet',(req,res)=>{
  let person='Guest';
  console.log(req.body) //req.body contains name objects
  if(req.body.person)
  // http://localhost:3000/greet/?person=harsh_goyal
  person=req.body.person
  res.send("Good Evening "+ person)  
})
app.listen(3000)