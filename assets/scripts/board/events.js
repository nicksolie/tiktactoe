// const config = require('../config.js')
const api = require('./api.js')
const ui = require('./api.js')
let turn = 'x'

// Take a blank tile and fill it
const onAction = function (event) {
  $('#message').text('')
  event.preventDefault()
  let value = $(event.target).text()
  // If tile has a mark, display error message
  if (value === 'x' || value === 'o') {
    $('#message').text('Error, this tile is alredy in play!')
  } else {
    value = $(event.target).text(turn)

    // switch turn
    if (turn === 'x') {
      turn = 'o'
    } else if (turn === 'o') {
      turn = 'x'
    }
  }
}

const onStartGame = function () {
  event.preventDefault()
  console.log('onStartGame pinged')
  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

module.exports = {
  turn,
  onAction,
  onStartGame
}
