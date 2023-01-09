// function doSomething(done){
//     console.log('1.doing something')
//     done()
// }
// doSomething(() =>{
//     console.log('2.it was done')
// })
// console.log('3.end')

//The above function runs in simple manner it prints order 123
//but when you set timeout then order will change
function doSomething(done){
    console.log('1.doing something')
    setTimeout( done,0); //while checking of this is going on meanwhile 3rd statement gets printed It is basically out of the stack call
    
}
doSomething(() =>{
    console.log('2.it was done')
})
console.log('3.end')