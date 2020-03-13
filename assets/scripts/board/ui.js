'use strict'

const startGameSuccess = function (data) {
  console.log('startGameSuccess pinged')
  $('#message').text('You have successfully started a game')
  console.log('Success data is:', data)
}

const startGameFailure = function () {
  console.log('startGameFailure pinged')
  $('#message').text('Error has occured in Start Game')
}

module.exports = {
  startGameSuccess,
  startGameFailure
}
