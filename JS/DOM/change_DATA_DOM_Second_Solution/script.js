window.onload = function () {
    let num = document.getElementById('num');
    let list = document.getElementById('list');
    let print = document.getElementById('print');

    print.onclick = function () {
        //recording the starting time
        let start = new Date().getTime();
        let N = parseInt(num.value);
        
        for (let i = 1; i <= N; i++) {
            let item=document.createElement('li'); //in this way new li item is created...this element is just in memory not inside the document yet
            item.innerHTML =i; //setting inside text of li
            list.appendChild(item); //to add one item with each passing loop
            //it also takes the similar time without using innerHTML.....This solution is used to remove completly innerHTML tag usage...this will make website too much fast

        }
        



        //printing the time from starting to end it gives the time in milliseconds
        // IMP

        console.log('Time taken(milliseconds) to build ', num.value, 'items:', new Date().getTime() - start);
    }
}