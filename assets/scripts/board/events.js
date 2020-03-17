// const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')

let turn = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let isGameOver = false
let turnCount = 0

const winnerX = function (gameBoard) {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') { return true }
  if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') { return true }
  if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') { return true }
  if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') { return true }
  if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') { return true }
  if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[6] === 'X') { return true }
  if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') { return true }
  if (gameBoard[6] === 'X' && gameBoard[4] === 'X' && gameBoard[2] === 'X') { return true }
  return false
}

const winnerO = function (gamboard) {
  if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') { return true }
  if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') { return true }
  if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') { return true }
  if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') { return true }
  if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') { return true }
  if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[6] === 'O') { return true }
  if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') { return true }
  if (gameBoard[6] === 'O' && gameBoard[4] === 'O' && gameBoard[2] === 'O') { return true }
  return false
}

const tie = function (turnCount) {
  if (turnCount === 9) {
    isGameOver = true
    console.log('tie')
    $('#game-message').text('Game is a tie!')
  }
}

// Fill space with a value
const onAction = function () {
  // Only allow action if game is not Over
  if (isGameOver === false) {
    $('#message').text('')
    let id = event.target.id
    let value = $(event.target).text()
    // If tile already has a mark, display error message
    if (value === 'X' || value === 'O') {
      $('#message').text('Error, this tile is alredy in play!')
    } else {
      value = $(event.target).text(turn)
    }
    // flip turn during event action
    if (turn === 'X') {
      $('#game-message').text('X\'s turn')
      // Set gameBoard to turn value
      gameBoard[id] = 'X'
      turn = 'O'
    } else if (turn === 'O') {
      $('#game-message').text('O\'s turn')
      gameBoard[id] = 'O'
      turn = 'X'
    }
    tie(turnCount)
    turnCount++
    // If X wins
  } if (winnerX(gameBoard) === true) {
    $('#game-message').text('X wins the game!')
    isGameOver = true
    // If O wins
  } else if (winnerO(gameBoard) === true) {
    $('#game-message').text('O wins the game!')
    isGameOver = true
  }
}

// ---------------------API---------------------------------------
// Start a game, and tell api to
const onStartGame = function () {
  event.preventDefault()
  console.log('onStartGame pinged')
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onRestartGame = function () {
  event.preventDefault()
  isGameOver = false
  gameBoard = ['', '', '', '', '', '', '', '', '']
  turnCount = 0
  $('#message').text('')
  $('.blank').text('')
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGFailure)
}

module.exports = {
  turn,
  onAction,
  onStartGame,
  onRestartGame
}
