let btnWait=document.getElementById('btnWait');
let btnCount=document.getElementById('btnCount');
let divStatus=document.getElementById('divStatus');
let divVal=document.getElementById('divVal');

let count=0;
//onclicking the function will automatically will be executed
//btnCount functionality
btnCount.onclick =function(){
    
    count++;
    // divVal.innerText=`${count}` This can also be done
    console.log('count',count)
    //one more way
    divVal.textContent=count
}

//btnWait Functionality

btnWait.onclick=function(){
    
    divStatus.textContent='Waiting'
    console.log('waiting')
    let start=Date.now();  //it will give the milliseconds passed till now 
    //wait 5 sec
    // while(Date.now()-start!=5000){
    //     //while using this it will take the whole processor for 5 seconds and frame usage drops to the 0 and after 5 seconds all the changes appear on the screen
    //     //This is not the good way of doing it
    //     //there is a image in IMP showing the performance of this while
    //     //instead of this we can use settimeout
    //     //the above code is just like continously looking at he clock
        
    // }
    //More efficient way
    //after complete execution only js writes the final result to the screen that's why waiting is not coming on the screen
    //console.log() prints immidiately no matter where it is before waiting
    setTimeout(() => {
        //task you want to happen 
        divStatus.textContent='Done'
    console.log('Done')
    },//after
     5000);
    //This approach is just like an alarm when it alarms then above task gets performed till then the processor can be used by other processes also
    //This is time sharing(i.e multi threading approach)
    //This is working awesome

    
}


