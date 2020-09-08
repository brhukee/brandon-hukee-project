const ui = require('./ui')
const api = require('./api')
// Player/game info
let player = 'X'
let game = ['', '', '', '', '', '', '', '', '']
let over = false
// Win conditions
const gameWinningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
// Click events
const onBoxClick = function (event) {
  const targetBox = event.target

  if ((over === false) && ($(targetBox).text() !== 'X' && $(targetBox).text() !== 'O')) {
    const dataCellNum = $(targetBox).attr('data-cell-index')

    game[dataCellNum] = player

    $(targetBox).text(player)

    gameWin()

    gameDraw()

    const data = {
      game: {
        cell: {
          index: dataCellNum,
          value: player
        },
        over: over
      }
    }

    api.updateGame(data)

    player = player === 'X' ? 'O' : 'X'
  }
}
// Game result functions
const gameWin = function () {
  for (let i = 0; i < gameWinningCombos.length; i++) {
    const newArr = []
    const singleWinningCombo = gameWinningCombos[i]
    newArr.push(game[singleWinningCombo[0]])
    newArr.push(game[singleWinningCombo[1]])
    newArr.push(game[singleWinningCombo[2]])

    if (newArr[0] === newArr[1] && newArr[1] === newArr[2] && newArr[0] !== '') {
      ui.winMessage(player)
      over = true
    }
  }
}

const gameDraw = function () {
  const emptyStringGame = game.some(element => element === '')
  if (emptyStringGame !== true && over === false) {
    ui.drawMessage()
    over = true
  }
}
// New game and games played
const newGame = function () {
  game = ['', '', '', '', '', '', '', '', '']
  over = false
  player = 'X'
  api.newGame()
    .then(ui.newGameMessage)
}

const getGames = function () {
  api.getGames()
    .then(ui.getGamesMessage)
}

module.exports = {
  onBoxClick: onBoxClick,
  gameDraw: gameDraw,
  newGame: newGame,
  getGames: getGames
}
