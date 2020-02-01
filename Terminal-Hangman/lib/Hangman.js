const Display = require('./Display')
class Hangman {
  constructor () {
    this._display = new Display()
  }

  startGame () {
    console.log('Hello World')
    this._display.displayMenu()
  }
}

module.exports = Hangman
