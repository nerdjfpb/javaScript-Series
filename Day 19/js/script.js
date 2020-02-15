console.log('Welcome to day 19')
console.log('Return in functions')

function dialouge(name, dialouge) {
  const nameWithDialouge = name + ' ' + dialouge
  return nameWithDialouge
}

const dialougeForPrint = dialouge('Joey', 'How you doing?')
console.log(dialougeForPrint)
