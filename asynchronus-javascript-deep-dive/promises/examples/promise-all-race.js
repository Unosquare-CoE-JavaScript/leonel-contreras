const getMessage = (message, time) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message)
    }, time)
  })

  return promise
}

setTimeout(() => {
  console.log('#####  Promise All  #####')
  Promise.all([
    getMessage('Hola', 1000),
    getMessage('Cómo estas?', 2000),
    getMessage('Bye', 3000)
  ]).then(data => {
    console.log('data --->', data)
  })
}, 16000)

setTimeout(() => {
  console.log('#####  Promise  Race  #####')
  Promise.race([
    getMessage('Hola', 1000),
    getMessage('Cómo estas?', 2000),
    getMessage('Bye', 3000)
  ]).then(data => {
    console.log('data --->', data)
  })
}, 20000)
