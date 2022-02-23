const createPost = (post) => {
  const uri = 'https://jsonplaceholder.typicode.com/posts'

  fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application-json'
    },
    body: post
  })
  .then(response => response.json())
  .then(data => {
    console.log('data --->', data)
  })
  .catch(err => console.log(err))

}

setTimeout(() => {
  console.log('##########  POST: JSON PLACE HOLDER #############')
  const post = {
    "userId": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  createPost(post)
}, 10000)