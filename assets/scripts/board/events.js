// const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')

let turn = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let isGameOver = false
let turnCount = 0

// // Possible win scenarios for player X
const winnerX = function (gameBoard) {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') { return true }
  if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') { return true }
  if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') { return true }
  if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') { return true }
  if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') { return true }
  if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') { return true }
  if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') { return true }
  if (gameBoard[6] === 'X' && gameBoard[4] === 'X' && gameBoard[2] === 'X') { return true }
  return false
}

// Possible win scenarios for player O
const winnerO = function (gamboard) {
  if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') { return true }
  if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') { return true }
  if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') { return true }
  if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') { return true }
  if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') { return true }
  if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') { return true }
  if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') { return true }
  if (gameBoard[6] === 'O' && gameBoard[4] === 'O' && gameBoard[2] === 'O') { return true }
  return false
}

const checkIsGameOver = function () {
  if (winnerX(gameBoard) === true) {
    $('#game-message').text('X wins the game!')
    isGameOver = true
  } else if (winnerO(gameBoard) === true) {
    $('#game-message').text('O wins the game!')
    isGameOver = true
    // Check for tie
  } else if (turnCount === 8) {
    $('#game-message').text('Game is a tie!')
    isGameOver = true
  }
}

// Fill space with a value
const onAction = function () {
  const id = event.target.id

  // Only allow action if game is not over
  if (isGameOver === true) {
    $('#game-message').text('Sorry game is over!')
    return
  }

  $('#message').text('')

  // Fill the space of a tile
  const value = $(event.target).text()
  // If tile already has a mark, display error message
  if (value === 'X' || value === 'O') {
    $('#message').text('Error, this tile is alredy in play!')
    return
  } else {
    $(event.target).text(turn)
  }

  // Populate the board with turn value
  $('#game-message').text(turn + '\'s turn')
  gameBoard[id] = turn

  // Check if game over
  checkIsGameOver(gameBoard)

  api.gameUpdate(turn, id, isGameOver)
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)

  // flip turn
  turn = turn === 'X' ? 'O' : 'X'

  turnCount++
}

// Start a game, and tell api to
const onStartGame = function () {
  event.preventDefault()
  $('.gameBoardContainer').removeClass('hidden')
  $('#restart-game').removeClass('hidden')
  $('#start-game').addClass('hidden')
  $('#message').text('')
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

// Clear the board, init a new game
const onRestartGame = function () {
  event.preventDefault()
  isGameOver = false
  gameBoard = ['', '', '', '', '', '', '', '', '']
  turnCount = 0
  turn = 'X'
  $('#message').text('')
  $('.blank').text('')
  $('#game-message').text('')
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGFailure)
}

const onGameUpdate = function (turn, id, isGameOver) {
  api.updateGame(turn, id, isGameOver)
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

const onGetStats = function (data) {
  console.log(data)
  event.preventDefault()
  api.getStats(data)
    .then(ui.getStatsSuccessful)
    .catch(ui.getStatsFailure)
}

module.exports = {
  onAction,
  onStartGame,
  onRestartGame,
  onGameUpdate,
  onGetStats
}
