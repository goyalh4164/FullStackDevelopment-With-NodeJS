function someAsyncTask (callback){
    setTimeout(
        function(){
            callback();
        },
     3000)
}
someAsyncTask(function (){
    console.log("We did some task")
})

//How promises work
