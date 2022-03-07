process.env.UV_THREADPOOL_SIZE=6
const crypto = require('crypto')

const start = Date.now()

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('1: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('2: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('3: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('4: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('5: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('6: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('7: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('8: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('9: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('10: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('11: time took', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
  console.log('12: time took', Date.now() - start)
})