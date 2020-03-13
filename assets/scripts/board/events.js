// const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')

let turn = 'x'

// Flip turn when called
const turnFlip = function () {
  if (turn === 'x') {
    turn = 'o'
  } else if (turn === 'o') {
    turn = 'x'
  }
}

// Fill space with a value
const onFillSpace = function () {
  $('#message').text('')
  event.preventDefault()
  let value = $(event.target).text()
  // If tile has a mark, display error message
  if (value === 'x' || value === 'o') {
    $('#message').text('Error, this tile is alredy in play!')
  } else {
    value = $(event.target).text(turn)
  }
}

const onAction = function () {
  turnFlip()
  onFillSpace()
}
// If there have been 9 turns, game is a draw
// increase counter each time a tile is clicked
// increment up while there are no met winning conditions

// const cases = [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
//
// for(let i = 0; i < cases.length; i++) {
//   if (event.target.id === ))
// }

// const case1 = [0, 1, 2]
// const case2 = [3, 4, 5]
// const case3 = [6, 7, 8]
// const case4 = [0, 3, 6]
// const case5 = [1, 4, 7]
// const case6 = [2, 5, 8]
// const case7 = [0, 4, 8]
// const case8 = [6, 4, 2]

// ------------------------------------------------------------
// Start a game, and tell api to
const onStartGame = function () {
  event.preventDefault()
  console.log('onStartGame pinged')
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

module.exports = {
  turn,
  onAction,
  onStartGame
}
