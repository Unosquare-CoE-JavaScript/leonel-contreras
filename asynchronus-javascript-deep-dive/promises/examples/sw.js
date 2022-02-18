const getCharacterInfo = (characterId) => {
  let uri = 'https://swapi.dev/api/people'

  fetch(`${uri}/${characterId}/`)
    .then(response => response.json())
    .then(data => {
      console.log('Character info --->', data)
      return fetch(data.homeworld)
    })
    .then(response => response.json())
    .then(data => console.log('Home world --->', data))
}


setTimeout(() => {
  console.log('################## Star wars ######################')
  getCharacterInfo(1)
}, 8000)