const uri = 'https://pokeapi.co/api/v2/pokemon'


/* 
  In this case we don´t have codependency between
  the promises when this happend exist more clean
  ways to resolve this situations ;) . But for this
  example work good enough

*/

setTimeout(() => {
  console.log('############### External APIs and Fetch #####################')
  fetch(`${uri}/1`)
    .then(response => {
      console.log('First call to poke.api')
      return response.json()
    })
    .then(data => {
      console.log('Data in JSON format: ', data.name)
      return fetch(`${uri}/4`)
    })
    .then(response => {
      console.log('Secound call to poke.api')
      return response.json()
    })
    .then(data => {
      console.log('Data in JSON format', data.name)
      return fetch(`${uri}/7`)
    })
    .then(response => {
      console.log('Third call to poke.api')
      return response.json()
    })
    .then(data => {
      console.log('Data in JSON format: ', data.name)
      return data
    })
    .catch(err => console.log(err))
}, 6000)