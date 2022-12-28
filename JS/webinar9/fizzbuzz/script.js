window.onload=function(){
    let inpNum=document.getElementById('inpNum');
    let btnPrint=document.getElementById('btnPrint');
    let ulNumlist=document.getElementById('ulNumlist');
    btnPrint.onclick=function(){

        let date=Date.now();
        //clearing the pre-wriiten HTML inside ul
        ulNumlist.innerHTML='';
        let n=inpNum.value;
        // Q i is divisible by both then write fizzbuzz ,if only 3 then write fizz ,if only by 5 then write buzz else print the number
        let c3=0;
        let c5=0;
        for(let i=1;i<=n;i++){
            //read the code carefully the multiple modulo condition is handled sucessfully

            // if(i%3==0 && i%5==0){
            //     let item=document.createElement('li');
            //     item.innerHTML='FizzBuzz';
            //     ulNumlist.appendChild(item);
            // }
            // else if(i%3==0){
            //     let item=document.createElement('li');
            //     item.innerHTML='Fizz';
            //     ulNumlist.appendChild(item);
            // }
            // else if(i%5==0){
            //     let item=document.createElement('li');
            //     item.innerHTML='Buzz';
            //     ulNumlist.appendChild(item);
            // }
            // else{
            //     let item=document.createElement('li');
            //     item.innerHTML=i;
            //     ulNumlist.appendChild(item);
            // }
            /**                    ||
             *                     ||
             *                     \/
             * Better Code to ignore multiple modulo operations
               */
            //   let li=document.createElement('li');
            //   let print=''
            //   if(i%3==0) print += "fizz"
            //   if(i%5==0) print += "buzz"
            //   if(print== '') print =i
            //   li.textContent=print
            //   ulNumlist.appendChild(li);
              /**
               * One More very optimized way without using modulo just + -
               *                   ||
             *                     ||
             *                     \/
               */
              let li=document.createElement('li');
              c3++;
              c5++;

              let print=""
              if(c3==3) {c3=0 ; print +="fizz"}
              if(c5==5) {c5=0 ; print +="buzz"}
              if(print== '') print =i
              li.textContent=print
              ulNumlist.appendChild(li);


              

        }
        console.log('Time Taken in milliseconds : ',Date.now()-date)
    }
}

/*
Complexity of Mathematical Operations
like a+b
if N=max numof bits in a and b

+ -> O(N)
- -> O(N)
* -> O(N^2)
/ -> O(N^2)
% -> O(N^2)
 Doing Modulo is a expensive operation  
 Try to use switch case instead of if and else
*/
