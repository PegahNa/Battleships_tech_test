// The Game class initializes the game and coordinates
// the actions between players, the board, and ships.
class Game {
  constructor() {
    // Initialize the game state
    this.players = []; // An array to hold the players
    this.currentPlayerIndex = 0; // Index of the current player in the players array
    this.gameOver = false; // Flag to track if the game is over
  }

  // Method to add a player to the game
  addPlayer(player) {
    if (this.players.length < 2) {
      this.players.push(player);
      console.log("${player.name} has joined the game! ");
    } else {
      console.log("maximum number of players reached!");
    }
  }
}

// Main entry point
const game = new Game();
game.start();
