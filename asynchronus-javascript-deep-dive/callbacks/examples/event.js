const button = document.getElementById('btn')

const onHandledClick = function (event) {
  console.log('The button was clicked.', event)
}

button.addEventListener('click', function (event) {
  console.log('The button was clicked.', event)
})
