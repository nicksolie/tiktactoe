'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('You have successfully signed up!')
  $('#message').removeClass()
  $('#message').addClass('sucess')
  console.log('signUpSuccess data: ', data)
}

const signUpFailure = function (error) {
  $('#message').text('A sign up error has occured')
  $('#message').removeClass()
  $('#message').addClass('failed')
  console.log('signUpFailure error: ', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data: ', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Sign in error')
  $('#message').removeClass()
  $('#message').addClass('failed')
  console.log('signInFailure error: ', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Changed password data is: ', data)
}

const changePasswordFailure = function (error) {
  $('#message').text('Change Password error')
  $('#message').removeClass()
  $('#message').addClass('failed')
  console.log('changePasswordFailure error is: ', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Sign out successfully.')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Sign out data is: ', data)
}

const signOutFailure = function (error) {
  $('#message').text('Change Password error')
  $('#message').removeClass()
  $('#message').addClass('failed')
  console.log('changePasswordFailure error is: ', error)
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
