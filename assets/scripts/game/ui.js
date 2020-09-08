const store = require('./../store')

const drawMessage = function () {
  $('#game-message').text('It is a draw')
}

const winMessage = function (player) {
  $('#game-message').text(`The winner is ${player}`)
}

const newGameMessage = function (response) {
  store.game = response.game
  $('.box').html('')
  $('#game-message').html('')
  $('.container').show()
}
const getGamesMessage = function (response) {
  $('#game-message').html('You have played ' + response.games.length + ' game(s)')
}

module.exports = {
  drawMessage: drawMessage,
  winMessage: winMessage,
  newGameMessage: newGameMessage,
  getGamesMessage: getGamesMessage
}
