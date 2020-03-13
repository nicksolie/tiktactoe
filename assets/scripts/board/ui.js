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

module.exports = {
  startGameSuccess,
  startGameFailure
}
