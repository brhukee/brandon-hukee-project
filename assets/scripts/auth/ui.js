'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#sign-up-message').text('Thanks for signing up ' + response.user.email)
  console.log('Success!')
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function (error) {
  console.log('error is', error)
  $('#sign-up-message').text('Sign up failed, try again.')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log('Success!')
  store.user = response.user
  $('#sign-in-message').text('Thanks for signing in, ' + response.user.email)
  $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function (error) {
  console.log('error is ', error)
  $('#sign-in-message').text('Sorry, sign in failed. Try again.')
  $('#sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#change-password-message').text('Password changed successfully!')
  console.log('Success!')
}

const onChangePasswordFailure = function () {
  $('#change-password-message').text('Error, could not change password.')
  console.log('error is', error)
}

const onSignOutSuccess = function () {
  $('#sign-out-message').text('Thanks, signed out successfully.')
  console.log('Success!')
}

const onSignOutFailure = function () {
  $('#sign-out-message').text('Error, could not sign you out. Try again.')
  console.log('error is', error)
}

const onStartGameSuccess = function () {
  $('#begin-game-message').text('Game has begun!')
  console.log('Success!')
}

const onStartGameFailure = function () {
  $('#begin-game-message').text('Error, game has not begun.  Try again.')
  console.log('error is', error)
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onStartGameSuccess: onStartGameSuccess,
  onStartGameFailure: onStartGameFailure
}
