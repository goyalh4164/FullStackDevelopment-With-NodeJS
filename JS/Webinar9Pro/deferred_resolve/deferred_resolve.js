function downloadPromise(){
    return new Promise(function (resolve,reject){
        console.log("Starting to download the file")
        setTimeout(function(){
            console.log("Download is complete")
            resolve();
        },3000)

    })
}

//we want to show the result later after 4 seconds of the file downloaded 
// downloadPromise().then(function(){
//     console.log("After download")
// })
//showing the result after 4 seconds
//when promise is resolved but you haven't called the then function ..it will stay as it is ..it transforms from pending to the completed state


let downloadedFile=downloadPromise();

setTimeout(function(){
    downloadedFile.then(function(){
        console.log("After download");
    })
},5000)

//this technique is known as deffered resolve