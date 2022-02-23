const getFilmsNames = async () => {
  let url = 'https://swapi.dev/api/films/',
        filmsData = {},
        films = []
  
  filmsData = await fetch(url).then(response => response.json())
  films = filmsData.results.map(item => item.title)
  console.log('films --->', films)
  return films
}

getFilmsNames()
console.log('I still be async')