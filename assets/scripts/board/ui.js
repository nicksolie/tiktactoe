'use strict'

const startGameSuccess = function (data) {
  console.log('startGameSuccess pinged')
  $('#message').text('You have successfully started a game')
  console.log('Success data is:', data)
}

const startGameFailure = function (data) {
  console.log('startGameFailure pinged')
  $('#message').text('Error has occured in Start Game', data)
}

const gameUpdateSuccess = function (data) {
  console.log('gameUpdateSuccess pinged')
}

const gameUpdateFailure = function (data) {
  console.log('gameUpdateFailure pinged')
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure
}
