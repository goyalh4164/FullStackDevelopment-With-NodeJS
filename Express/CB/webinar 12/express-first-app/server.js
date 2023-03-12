const express = require('express')

const app = express()

// In public folder we keep files that we show to the public

// app.use(express.static(__dirname + '/public'))  //providing the path of the public folder to the express

app.use('/xyz',express.static(__dirname + '/public'))

app.get('/hello', (req, res) => {
    
    
    res.send('Hello World ')
})



app.listen(3000, () => {
    console.log('server started on http://localhost:3000')
})