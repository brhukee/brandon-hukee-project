const store = require('./../store')

const drawMessage = function () {
  $('#game-message').text('Draw')
}

const winMessage = function (player) {
  $('#game-message').text(`Winner is${player}`)
}

const newGameMessage = function (response) {
  store.game = response.game
  $('.box').html('')
  $('#game-message').html('')
  $('.container').show()
}
const getGamesMessage = function (response) {
  $('#game-message').html('Total games played: ' + response.games.length)
}

module.exports = {
  drawMessage: drawMessage,
  winMessage: winMessage,
  newGameMessage: newGameMessage,
  getGamesMessage: getGamesMessage
}
