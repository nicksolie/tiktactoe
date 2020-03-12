let turn = 'x'

// Take a blank tile and fill it
const action = function (event) {
  event.preventDefault()
  // what is the id number for the tile?
  const choice = event.target.id
  console.log(choice)
  // what is the current value of the tile?
  const value = $(event.target).text()
  if (choice !== 'x' || choice !== 'o') {
    let value = $(event.target).text(turn)
  }
  console.log(value)
  // if the space is not x or o then add it to the tile
  if (turn === 'x') {
    turn = 'o'
  } else if (turn === 'o') {
    turn = 'x'
  }
}

module.exports = {
  turn,
  action
}
