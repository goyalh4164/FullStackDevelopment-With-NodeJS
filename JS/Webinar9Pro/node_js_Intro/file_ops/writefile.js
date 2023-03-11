// Requiring fs module in which
    // writeFile function is defined.
    const fs = require('fs')
      
    // Data which will write in a file.
    let data = "Learning how to write in a file."
      
    // Write data in 'Output.txt' .
    fs.writeFile(__dirname+'/myfile.txt', data, (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
    })

    fs.readFile(__dirname+'/myfile.txt', (err, data) => {
        if (err) throw err;
     
        console.log(data.toString());
    })