/*
const getMoviesInformation = (filmId) => {
  const uri = 'https://swapi.dev/api/films'

  fetch(`${uri}/${filmId}`)
    .then(response => response.json())
    .then(data => data.planets.forEach(pln => {
      fetch(pln)
        .then(response => response.json())
        .then(planet => {
          console.log('planet -->', planet, pln)
        })
    }))
}
*/

const getMoviesInformation = async (filmId) => {
  const uri = 'https://swapi.dev/api/films'
  let result = []

  const data = await fetch(`${uri}/${filmId}`).then(response => response.json())
  const promises = data.planets.map(planet => fetch(planet))
  
  for await (const promise of promises) {
    const data = await promise.json()
    result.push(data.name)
  }

  return result
}

setTimeout(async () => {
  console.log('##### Refactor #####')
  const response = await getMoviesInformation(1)
  console.log('response --> ', response)
}, 2000)
