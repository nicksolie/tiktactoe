'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('You have successfully signed up!')
  $('#message').removeClass()
  $('#message').addClass('sucess')
  document.getElementById('sign-up').reset()
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
}

const signUpFailure = function () {
  $('#message').text('A sign up error has occured.')
  $('#message').removeClass()
  $('#message').addClass('failed')
  document.getElementById('sign-up').reset()
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#start-game').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#game-stats').removeClass('hidden')
  $('#game-stats-message').removeClass('hidden')
  document.getElementById('sign-in').reset()
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error, please try again.')
  $('#message').removeClass()
  $('#message').addClass('failed')
  document.getElementById('sign-in').reset()
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('change-password').reset()
}

const changePasswordFailure = function () {
  $('#message').text('Change Password error')
  $('#message').removeClass()
  $('#message').addClass('failed')
  document.getElementById('change-password').reset()
}

const signOutSuccess = function () {
  $('#message').text('Sign out successfully.')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('.gameBoardContainer').addClass('hidden')
  $('#restart-game').addClass('hidden')
  $('#game-message').text('')
  $('#start-game').addClass('hidden')
  $('#game-stats').addClass('hidden')
  $('#game-stats-message').addClass('hidden')
  $('#game-stats-message').text('')
  document.getElementById('change-password').reset()
}

const signOutFailure = function () {
  $('#message').text('Change Password error.')
  $('#message').removeClass()
  $('#message').addClass('failed')
  document.getElementById('change-password').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
