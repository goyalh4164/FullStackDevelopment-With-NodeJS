//you have to pass a function inside the promise to create a promise that function also takes two arguments if all things goes good then it call resolve else it calls reject
//this .then is a part of resolve
//this .catch is a part of reject
let btnWait2 = document.getElementById('btnWait2')
let inpTimeout2 = document.getElementById('inpTimeout2')

let wait2 = function (timeout) {
  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(timeout))) {
      reject(new Error('Timeout should be a number'))
    }

    setTimeout(resolve, timeout)
  })
}

btnWait2.onclick = function () {
  wait2(inpTimeout2.value)
  .then(() => {
    console.log('waited over')
  })
  .catch((err) => {
    console.error(err)
  })
}