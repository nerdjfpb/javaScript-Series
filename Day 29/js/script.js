// console.log('Welcome to day 29')
// console.log('Refactor our last tutorial code')

// var ul = document.getElementById('anime-list')
// var animeName = document.getElementById('entered-anime')
// var addAnime = document.getElementById('add-anime')

// function inputLengthCheck(input) {
//   return input.value.length
// }

// function createListElement(item) {
//   var li = document.createElement('li')
//   li.appendChild(document.createTextNode(item.value))
//   ul.appendChild(li)
//   item.value = ''
// }

// function addAnimeInList() {
//   if (inputLengthCheck(animeName) > 0) {
//     createListElement(animeName)
//   }
// }

// addAnime.addEventListener('click', addAnimeInList)

function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
  // console.log(four)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`
