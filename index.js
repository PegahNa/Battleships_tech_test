import Game from "./src/game";
import Board from "./src/board";
import Ship from "./src/ship";
import Player from "./src/player";

// Create instances of the necessary classes
const board = new Board();
const player1 = new Player("Player 1");
const player2 = new Player("Player 2");
const game = new Game(board, player1, player2);

// Start the game
game.start();
