let btnWait = document.getElementById('btnWait')
let inpTimeout = document.getElementById('inpTimeout')

function wait1(timeout, done) {
  if (isNaN(parseInt(timeout))) {
    return done(new Error('Timeout must be a number'))
  }

  setTimeout(() => {
    done(null)
  }, timeout)
}

btnWait.onclick = function () {
  wait1(inpTimeout1.value, (err) => {
    if (err) console.error(err) 
    else console.log('wait over')
  })
}