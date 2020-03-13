const config = require('../config.js')
const store = require('../store.js')

const startGame = function () {
event.preventDefault()
  console.log('startGame api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  startGame
}
