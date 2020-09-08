'use strict'

const store = require('./../store')

const onSignInButton = function () {
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
}

const onSignUpButton = function () {
  $('#sign-up-form').show()
  $('#sign-in-form').hide()
}

const changePassForm = function () {
  $('#pass-change-form').show()
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

const onSignInFailure = function () {
  $('#message').show()
  $('#message').text('Sign in failed')
}

const onPassChangeSuccess = function (response) {
  $('#message').show()
  $('#message').text('Password reset successful')
  $('#pass-change-form').trigger('reset')
  $('#pass-change-form').hide()
}

const onPassChangeFailure = function () {
  $('#message').show()
  $('#message').text('Password reset unsuccessful')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign out successful')
  $('#change').hide()
  $('#sign-out').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#user-name').html('')
  $('.buttons').hide()
  $('#game-message').html('Please Sign In')
  $('.container').hide()
  $('#pass-change-form').hide()
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').text('Sign out failed')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onPassChangeSuccess: onPassChangeSuccess,
  onPassChangeFailure: onPassChangeFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onSignInButton: onSignInButton,
  onSignUpButton: onSignUpButton,
  changePassForm: changePassForm
}
