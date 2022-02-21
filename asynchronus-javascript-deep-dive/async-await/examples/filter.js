const getUserPost = async (userId) => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const data = await fetch(url).then(response => response.json())
  console.log('data >>', data)
  return data.filter(item => item.userId === userId)
}

setTimeout(async () => {
  console.log('######### async/await + filter ##########')
  const posts = await getUserPost(1)
  console.log('posts -->', posts)
}, 1000)