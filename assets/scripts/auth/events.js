'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const playerX = 'X' || 'O'

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('MDC data from onSignUp is', data)

  api.SignUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('MDC data from onSignIn is ', data)

  api.SignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('MDC data from onChangePassword is', data)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  console.log('onSignOutfired!')

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onStartGame = function (event) {
  console.log('is my event running')
  event.preventDefault()
  console.log('onStartGame is hitting!')

  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

const onBoxClick = function (event) {
  console.log('onBoxClick is hitting!')
  console.log(event.target.id)

  $(`#${event.target.id}`).text(playerX)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onStartGame: onStartGame,
  onBoxClick: onBoxClick
}
