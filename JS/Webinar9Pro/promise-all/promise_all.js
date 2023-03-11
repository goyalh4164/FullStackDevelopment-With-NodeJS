function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject (new Error("Url does not start with http"));
        }
        else{
            console.log("Start download :" + url)
            setTimeout(function(){
                let fileName=url.split("/").pop();
                resolve(fileName)  //the argument written inside the resolve will pass into the .then
            },3000)
        }
    })
}


function resize(fileName){
    return new Promise(function(resolve,reject){
        if(!fileName.endsWith(".png")){
            reject(new Error("file is not png"));
        }
        else{
            console.log("Start resize : "+fileName)
            setTimeout(function(){
                let resizedFile=fileName.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}

function upload(resizedFileName){
    return new Promise(function(resolve,reject){
        console.log("Start upload : "+ resizedFileName)
        setTimeout(function(){
            let uploadedUrl ="http:imgur.com/"+resizedFileName;
            resolve(uploadedUrl)
        },3000)
    })
}

Promise.all([
    //here as array of promises is send
    //they all run parallely
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png'),
    //if any promise get's rejected then "then block will not run"
]).then(function(downloadValues){  //values is an array of resolve
    return Promise.all(downloadValues.map(resize))
}).then (function(resizeValues){
    return Promise.all(resizeValues.map(upload))
}).then(function(uploadValues){
    console.log(uploadValues)
})
.catch(function(err){  //it will run when any one of the promise get's rejected
    console.error(err)
})