let turn = 'x'

// Take a blank tile and fill it
const action = function (event) {
  event.preventDefault()
  // what is the current value of the tile?
  let value = $(event.target).text()
  if (value === 'x' || value === 'o') {
    console.log('Stop!')
  } else if (value !== 'x' || value !== 'o') {
    value = $(event.target).text(turn)
    if (turn === 'x') {
      turn = 'o'
    } else if (turn === 'o') {
      turn = 'x'
    }
  }
  // if the space is not x or o then add it to the tile
  // let currentValue = turn
  // if (currentValue === 'x' || currentValue === 'o') {
  //   currentValue = $(event.target).text(turn)
  // }
}

module.exports = {
  turn,
  action
}
// if tile is not empty, return value?
