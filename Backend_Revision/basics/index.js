const http = require("http")
const RandomName = require('../module/features')
//created the server for req,res
const server = http.createServer((req,res)=>{
    if (req.url === "/") {
        res.write("<h1>Home</h1>");
        res.end();
      } else if (req.url === "/about") {
        res.write("<h1>About</h1>");
        res.end();
      } else if (req.url === "/contact") {
        res.write("<h1>Contact</h1>");
        res.end();
      } else {
        res.write("Page not Found");
        res.write(RandomName);
        res.end();
      }
})

// server is listenting to this port
server.listen(5000, () => {
    console.log("Server is working");
});

// since all the functions are in one block thay will create a mess 
// so i will be using the express to overcome this problem
  