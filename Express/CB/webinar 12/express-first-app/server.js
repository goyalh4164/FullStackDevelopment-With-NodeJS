const express = require('express')

const app = express()

// In public folder we keep files that we show to the public

// app.use(express.static(__dirname + '/public'))  //providing the path of the public folder to the express

app.use('/xyz',express.static(__dirname + '/public')) //concept of mounting

app.get('/hello', (req, res) => {
    let user='Guest'
    if(req.query.user) {user=req.query.name};    
    res.send('Hello World ' + user)
})



app.listen(3000, () => {
    console.log('server started on http://localhost:3000')
})