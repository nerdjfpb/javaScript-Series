console.log('Welcome to day 22')
console.log('Objects')

var characterDetails = {
  name: 'Monkey D. Luffy',
  age: 19,
  fatherName: 'Monkey D. Dragon',
  brothers: ['Ace', 'Sabo'],
  favoriteFood: 'Meat',
  shout: function() {
    console.log('gomu gomu no....')
  }
}

characterDetails.age = 20

console.log(characterDetails)

characterDetails.shout()
