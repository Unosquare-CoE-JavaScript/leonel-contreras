const getData = async (uri) => {
  return await fetch(uri).then(response => response.json())
}

const APP = (async (nsp) => {
  const uri = 'https://jsonplaceholder.typicode.com',
        userId = 1

  const posts = getData(`${uri}/posts?userId=${userId}`)
  const comments = getData(`${uri}/posts/1/comments`)
  const todos = getData(`${uri}/todos?userId=${userId}`)

  const result = await Promise.all([posts, comments, todos])
  nsp.posts = result[0]
  nsp.comments = result[1]
  nsp.todos = result[2]

  return nsp
})({})

APP.then((data) => {
  console.log('######## EXAMPLE OF IIFEs + Promise all + async/await #########')
  console.log('result APP --->', data)
})

/*
Refactor this code 41 lines
const getData = (uri) => {
  const promise = new Promise((resolve, reject) => {
    fetch(uri)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })

  return promise
}

var MAINAPP = (function (nsp) {
  let userId = 1
  let uri = 'https://jsonplaceholder.typicode.com'

  const promise = new Promise((resolve, reject) => {
    getData(`${uri}/posts?userId=${userId}`)
      .then(posts => {
        nsp.posts = posts
        return getData(`${uri}/posts/1/comments`)
      })
      .then(comments => {
        nsp.comments = comments
        return getData(`${uri}/todos?userId=${userId}`)
      })
      .then(todos => {
        nsp.todos = todos
        resolve(nsp)
      })
      .catch(err => reject(err))
  })

  return promise

})(MAINAPP || {})

MAINAPP.then((data) => {
  console.log('######## EXAMPLE OF IIFEs + Promise #########')
  console.log('result --->', data)
})
*/