'use strict'

const config = require('./../config')
const store = require('../store')

const SignUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const SignIn = function (data) {

  console.log('SignIn data is', data)

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {

  console.log('changePassword data is', data)

  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  console.log('signOut function hitting')

  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const startGame = function () {
  console.log('startGame hitting!')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  SignUp: SignUp,
  SignIn: SignIn,
  changePassword: changePassword,
  signOut: signOut,
  startGame: startGame
}
