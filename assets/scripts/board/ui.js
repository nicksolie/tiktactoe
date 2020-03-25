'use strict'

const store = require('../store.js')

const startGameSuccess = function (data) {
  $('#message').text('You have successfully started a game')
  $('#game-stats-message').text('')
  store.game = data.game
}

const startGameFailure = function (data) {
  $('#message').text('Error has occured in Start Game')
}

const gameUpdateSuccess = function (data) {
}

const gameUpdateFailure = function (data) {
}

const getStatsSuccessful = function (data) {
  $('#game-stats').removeClass('hidden')
  $('#game-stats-message').text('Currently ' + data.games.length + ' games')
}

const getStatsFailure = function (data) {
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure,
  getStatsSuccessful,
  getStatsFailure
}
