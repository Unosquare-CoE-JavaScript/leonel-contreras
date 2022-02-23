function *randomNumber(limit = 100) {
  while (true) {
    yield Math.floor(Math.random() * limit) + 1
  }
}

console.log(randomNumber(100).next())