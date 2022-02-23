const getMessage = (message) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message)
    }, 0)
  })

  return promise
}

setTimeout(async () => {
  console.log('##### Async/await Promise All  #####')
  const data = await Promise.all([
    getMessage('Hola'),
    getMessage('Cómo estas?'),
    getMessage('Bye')
  ])

  console.log('data -->', data)
}, 8000)