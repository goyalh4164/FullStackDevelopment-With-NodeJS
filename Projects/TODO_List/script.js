// let ulTasks=$('#ulTasks') similar way
let ulTasks=document.getElementById('ulTasks');
let btnAdd=document.getElementById('btnAdd');
let btnClear=document.getElementById('btnClear');
let inpNewTask=document.getElementById('inpNewTask')
let btnCleanup=document.getElementById('btnCleanup');



btnAdd.onclick =function(){
    //storing the input value
    let task=inpNewTask.value;
    //just returning if it is empty
    if(task==''){
        return
    }
    //creating element li
    let li=document.createElement('li');
    li.className='list-group-item';
    li.innerText=task;
    inpNewTask.value='';
    //appending the child
    ulTasks.appendChild(li);
    //task(li) on click
    // ----------------------------------TOGGLE class--------------------------
    // Toggling the class means 
    // if there is no class name assigned to the element,
    // then a class name can be assigned to it dynamically 
    // or if a certain class is already present, then it can be removed dynamically
    // by just using the toggle() or by using contains(), add(), remove() 
    // methods of DOMTokenList object within JavaScript
    //Added function for the li done or not
    li.onclick=function(){
        li.classList.toggle('done');
    }
}
// TODO
//if you press enter then it also add into the task list
// inpNewTask.addEventListener('keydown',(e)=>e.k)

btnClear.onclick=function(){
    //clear the input box
    inpNewTask.value='';
}
btnCleanup.onclick=function(){
    let list_of_done_tasks=document.getElementsByClassName('done');
    
    // for(let i=0;i<list_of_done_tasks.length;i++){
    //     list_of_done_tasks[i].remove();
    // }
}

    