console.log('Welcome to day 28')
console.log('Add New Anime On The List Using Event ')

var ul = document.getElementById('anime-list')
var animeName = document.getElementById('entered-anime')
var addAnime = document.getElementById('add-anime')

addAnime.addEventListener('click', function() {
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(animeName.value))
  ul.appendChild(li)
})
