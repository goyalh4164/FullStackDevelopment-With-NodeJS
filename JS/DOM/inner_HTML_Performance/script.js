window.onload =function (){
    let num =document.getElementById('num');
    let list =document.getElementById('list');
    let print =document.getElementById('print');
    
    print.onclick = function (){
        //recording the starting time
        let start=new Date().getTime();
        let N=parseInt(num.value);
        // for(let i=1;i<=N;i++){
        //     list.innerHTML+='<li>' +i +'</li>';
        //     //the lag of performance is due to the innerHTML because whenever we add string to an existing string then the entire string gets reset and evaluated again
        //     // Basically above code is doint this thing
        //     // 1-->let newstr =list.innerHTML +'<li>' +i + '</li>'; //string content
        //     // 2-->list.innerHTML =null; //string rest
        //     // 3-->list.innerHTML=newstr; //string evaluating again
            



        // }
        // To solve the list.innerHTML issue we will build the entire string in one go then we will finally set it equal to the innerHTML
        // Solution
        let listHTML=''; //empty string
        for(let i=1;i<=N;i++){
            listHTML +='<li>' +i + '</li>'; //here we are just building the strinng not evaluating it again and again
        }
        list.innerHTML=listHTML; //finally set it and it will going to be evaluated in one go
        //CONCLUSION never try to append innerHTML inside the for loop
        //It is a constly operation


        //printing the time from starting to end it gives the time in milliseconds
        // IMP
        // when we pressed print then no. of frames in the performance tag drped to zero that's means you can't do anything till that time...
        console.log('Time taken(milliseconds) to build ' ,num.value ,'items:',new Date().getTime()-start);
    }
}