const https = require('https')

const start = Date.now()

const get = () => {
  https.request('https://www.google.com/', (response) => {
    response.on('data', () => {})
    response.on('end', () => {
      console.log(Date.now() - start)
    })
  }).end()
}

get()
get()
get()
get()
get()
get()
get()