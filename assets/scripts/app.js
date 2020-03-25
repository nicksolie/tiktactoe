'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const boardEvents = require('./board/events.js')
// const apiEvents = require('./board/api.js')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.blank').on('click', boardEvents.onAction)
  $('#start-game').on('submit', boardEvents.onStartGame)
  $('#restart-game').on('submit', boardEvents.onRestartGame)
  $('#game-stats').on('submit', boardEvents.onGetStats)
})

// $('#sign-out').on('submit', authEvents.onSignOut)
