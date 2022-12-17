window.onload=function(){
    
    let newtask=document.getElementById('newtask');
    let addtask=document.getElementById('addtask');
    let todolist=document.getElementById('todolist');
    let close=document.getElementsByClassName('close');
    addtask.onclick =function (){
        let li=document.createElement('li');
        li.innerText=newtask.value;
        newtask.value='';  //if you want just after click input box become empty
        //now creating the remove tast button
        let xBtn=document.createElement('button')
        xBtn.innerText='  ❌'
        li.appendChild(xBtn) //append the cross button inside the li
        //my way
        // xBtn.onclick=function (){
        //     xBtn.parentElement.remove();
        // }
        // one more way
        xBtn.onclick=function (event){
            //event contains target on thich currently cursor is pointing
            event.target.parentElement.remove();
        }


        todolist.appendChild(li);
    }
}
