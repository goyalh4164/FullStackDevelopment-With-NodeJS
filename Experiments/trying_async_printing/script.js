let list=document.getElementById('list_container');

let count=1;
setInterval(() => {
    let item=document.createElement('li')
    item.innerHTML=count;
    list.appendChild(item);
    count++;
}, 1000);