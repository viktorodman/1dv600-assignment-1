/**
 * Starting point of the application.
 *
 * @author Viktor Ödman
 * @version 1.0.0
 */

const Hangman = require('./lib/Hangman')

const hangman = new Hangman()

hangman.startGame()
