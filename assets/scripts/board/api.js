const config = require('../config.js')
const store = require('../store.js')

const startGame = function () {
  console.log('startGame api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUpdate = function (data) {
  console.log('update api.js')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  startGame,
  gameUpdate
}
