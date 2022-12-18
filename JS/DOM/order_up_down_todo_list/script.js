window.onload=function(){
    
    let newtask=document.getElementById('newtask');
    let addtask=document.getElementById('addtask');
    let todolist=document.getElementById('todolist');
    
    addtask.onclick =function (){
        let li=document.createElement('li');
        let taskSpan=document.createElement('span')
        //Add the tast text
        taskSpan.innerText=newtask.value;
        //reseting the text after addition to todo list
        newtask.value='';  

        //Add the X Button
        let xBtn=document.createElement('button')
        xBtn.innerText='❌  '
        //xBtn functionality
        xBtn.onclick=function (event){
            
            event.target.parentElement.remove();
        }
        //upBtn functionality
        let upBtn =document.createElement('button')
        upBtn.innerText = '⬆️'
        upBtn.onclick=function(event){
            // event.target = upBtn
            //event.target.parentElement = <li> item
             event.target.parentElement.parentElement.insertBefore(event.target.parentElement //insert this element
             ,event.target.parentElement.previousElementSibling //before it's previous element
             )  //the li items will behave like a circular queue
            
        }
        let dnBtn =document.createElement('button')
        dnBtn.innerText = '⬇️'
        dnBtn.onclick=function(event){
            // event.target = upBtn
            //event.target.parentElement = <li> item
            // we are using insertbefore here also? because insert after does not exist
             event.target.parentElement.parentElement.insertBefore(
             event.target.parentElement.nextElementSibling,event.target.parentElement) //before it's previous element
               //the li items will behave like a circular queue
            
        }

        li.appendChild(xBtn) ;
        li.appendChild(upBtn)   
        li.appendChild(dnBtn)   
        li.appendChild(taskSpan);
        todolist.appendChild(li);
    }
}
