'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const ui = require('./auth/ui')
// use require without a reference to ensure a file is bundled
// require('./example')
$('#pass-change-form').hide()
$('#sign-out').hide()
$('#change').hide()
$('#sign-in-form').hide()
$('#sign-up-form').hide()
$('.container').hide()
$('.buttons').hide()

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#pass-change-form').on('submit', authEvents.onPassChange)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#sign-in-button').on('click', ui.onSignInButton)
  $('#sign-up-button').on('click', ui.onSignUpButton)
  $('#change').on('click', ui.changePassForm)
  $('.box').on('click', gameEvents.onBoxClick)
  $('#newGame').on('click', gameEvents.newGame)
  $('#getGames').on('click', gameEvents.getGames)
})
