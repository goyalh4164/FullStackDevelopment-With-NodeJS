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

download('http://cb.lk/logo.png')
    .then(resize)
    .then(upload)
    .then(function(uploadedUrl){
        console.log("File was uploaded to : "+ uploadedUrl)
    })
    .catch(function(err){   //this catch function will catch the error of any rejected promise you need not to write multiple catch
        console.error(err);
    })