console.log('############ BASIC EXAMPLES #####################')

const asyncFunction = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved after a amount of time')
    }, 2000)
  })

  return promise
}


/*
  ---> First approach 
*/

let promise = asyncFunction().then((value) => {
  console.log('Aproach 1: A new value !!!', value)
  return asyncFunction()
})

promise.then(value => {
  console.log('Aproach 1: A new value !!!', value)
})

/*
  ----> Refactor and more natural way to do it
  with this changes we lead with some problems
  releated with classic callbacks:

  - Callback hell
  - Difficult to write
  - Difficult to read

  And looks more natural, but we need to remember
  that this code continues be asynchronous
*/

asyncFunction()
  .then(value => {
    console.log('Aproach 2: A new value !!!', value)
    return asyncFunction()
  })
  .then(value => {
    console.log('Aproach 2: A new value !!!', value)
  })