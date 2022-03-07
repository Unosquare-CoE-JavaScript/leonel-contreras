const express = require('express')
const crypto = require('crypto')
const app = express()

// I'm the child and I'm going to act like a server
app.get('/', (request, response) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
    response.send('Hi there')
  })
})

app.get('/fast', (request, response) => {
  response.send('I finished fast')
})

app.listen(3000)