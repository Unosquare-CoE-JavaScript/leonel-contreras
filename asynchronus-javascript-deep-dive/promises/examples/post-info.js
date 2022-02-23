const getData = (uri) => {
  const promise = new Promise((resolve, reject) => {
    fetch(uri)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })

  return promise
}

/*
   This is my solution, 
   if you wan to be more clean use a promise all
*/

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

/*
  
  Just for the record, the teacher used three individual
  fetches and this was just for educational purpose, he
  wants to demostrate the feature of mutable objects,
  that means you can compose objects or change it all
  if you want in differents points in your program.

  var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    fetch(url + 'posts/')
    .then(response1 => response1.json())
    .then(posts => nsp.posts = posts)
    .catch(err => console.log(`Problem retrieving posts: ${err}`));

    fetch(url + 'comments/')
    .then(response2 => response2.json())
    .then(comments => nsp.comments = comments)
    .catch(err => console.log(`Problem retrieving comments: ${err}`));

    fetch(url + 'todos/')
    .then(response3 => response3.json())
    .then(todos => nsp.todos = todos)
    .catch(err => console.log(`Problem retrieving todos: ${err}`));

    //public
    return nsp;
})(MAINAPP || {});

*/