'use strict'

const store = require('./../store')

// Button functionality w/ JQuery hide/show effects
const onSignUpButton = function () {
  $('#sign-up-form').show()
  $('#sign-in-form').hide()
}

const onSignInButton = function () {
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
}

const changePassword = function () {
  $('#change-password-form').show()
}

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user

  $('#user-name').text('Welcome ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-out').show()
  $('#change').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('.buttons').show()
  $('#message').hide()
  $('#game-message').html('')
}

const onSignInFailure = function (error) {
  $('#message').show()
  $('#message').text('Failed to sign in, try again')
}

const onChangePasswordSuccess = function (response) {
  $('#message').show()
  $('#message').text('Password reset successful')
  $('#pass-change-form').trigger('reset')
  $('#pass-change-form').hide()
}

const onChangePasswordFailure = function () {
  $('#message').show()
  $('#message').text('Password reset unsuccessful, try again')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign out successful')
  $('#change').hide()
  $('#sign-out').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#user-name').html('')
  $('.buttons').hide()
  $('#game-message').html('Sign in')
  $('.container').hide()
  $('#pass-change-form').hide()
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').text('Failed to sign out, try again')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure
}
