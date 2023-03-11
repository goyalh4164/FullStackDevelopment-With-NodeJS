function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject (new Error("Url does not start with http"));
        }
        else{
            setTimeout(function(){
                let fileName=url.split("/").pop();
                resolve(fileName)
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
            setTimeout(function(){
                let resizedFile=fileName.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            })
        }
    })
}

download('http://cb.lk/logo.png')
.then(function(fileName){
    resize(fileName).then(function(resizedFile){
        console.log("Resized file is at :"+resizedFile)
    })
})