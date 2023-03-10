let btnWait = document.getElementById('btnWait')
let inpTimeout = document.getElementById('inpTimeout')

let wait =function(timeout){
    return new Promise((resolve,reject)=>{
        if(isNaN(parseInt(timeout))){
            reject(new Error('Timeout should be a number'))
        }inpTimeout
        setTimeout(resolve,timeout)
    })
}

btnWait.onclick =function(){
    wait(inpTimeout.value)
    .then(()=>{                //it will execute only when the promise is completely resolved
        console.log('waited over')
    })
    .catch((err)=>{   //it will catch the rejected part by the promise
        console.error(err)
    })
}