const express = require('express')
const app = express()

function doWork (duration) {
  const start = Date.now()
  while(Date.now() - start < duration) {}
}

app.get('/', (request, response) => {
  doWork(5000)
  response.send('I finished')
})

app.listen(3000)
