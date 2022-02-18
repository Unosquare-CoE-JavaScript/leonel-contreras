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


setTimeout(() => {
  console.log('###########Multiple parallel async request#########')
  getMoviesInformation(1)
}, 12000)