process.env.UV_THREADPOOL_SIZE=1
const cluster = require('cluster')
const proc = require('process')
const express = require('express')
const crypto = require('crypto')
const app = express()

console.log(process.env)

if (cluster.isPrimary) {
  cluster.fork()
  cluster.fork()

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  })
} else {
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
  
  console.log(`Worker ${proc.pid} started`);
}