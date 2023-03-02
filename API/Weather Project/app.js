const express=require("express");
const https=require("https"); // To use the API
const bodyParser=require("body-parser") //To read the response from the post of the index.html
const app=express();

app.use(bodyParser.urlencoded({extended :true})) //necessary code

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const query=req.body.cityName;
    const apiKey="ebe40922610017bb96421256fe31f8b6";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey;
    
    https.get(url,function(response){  //This response gives the information about the API url
        //extracting information from the API
        response.on("data",function(data){  
            // console.log(data);  //This is a hexadecimal information (<Buffer 7b 22 63 6f 6f 72 64 22 3a 7b 22 6c 6f 6e 22 3a 2d 30 2e 31 32 35 37 2c 22 6c 61 74 22 3a 35 31 2e 35 30 38 35 7d 2c 22 77 65 61 74 68 65 72 22 3a 5b ... 423 more bytes>)
            // Converting the hexadecimal information to the JSON object
            const weatherData=JSON.parse(data);
            // console.log(weatherData);
            const icon=weatherData.weather[0].icon;
            const temp=weatherData.main.temp;
            const weatherDescription=weatherData.weather[0].description;
            const imageURL="https://openweathermap.org/img/wn"+icon+"@2x.png"

            res.write("<h1>The weather is currently "+weatherDescription+"</h1>");
            res.write("<h1>The temperature in "+query+" is : "+temp+"degree celsius </h1>");
            res.write("<img src="+imageURL+">");
            
            res.send();

        })
        
    })
})

app.listen(3000,function(){
    console.log("Server running on port 3000")
})

