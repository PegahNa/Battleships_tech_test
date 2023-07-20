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
      console.log(`${player.name} has joined the game! `);
    } else {
      console.log("maximum number of players reached!");
    }
  }

  start() {
    if (this.players.length < 2) {
      console.log("Cannot start the game. Need at least 2 players.");
      return;
    }

    console.log("Game started!");

    // Game setup and initialization can go here

    this.gameLoop();
  }

  // Method to handle the game loop and player turns
  gameLoop() {
    while (!this.gameOver) {
      const currentPlayer = this.players[this.currentPlayerIndex];
      console.log(`${currentPlayer.name}'s turn: `);

      // Player's turn: Fire a shot
      const target = currentPlayer.getShotTarget(); // Implement this method in the Player class
      const result = this.fireShot(target);

      // Display the result of the shot
      console.log(result);

      // After a turn, check for game over condition
      this.checkGameOver();

      // Switch to the next player's turn
      this.currentPlayerIndex =
        (this.currentPlayerIndex + 1) % this.players.length;
    }
  }

  fireShot(target) {
    // Implement the logic to fire a shot at the specified target
    // For example, you can check if the target is a valid location on the opponent's board,
    // update the opponent's board with the shot result (hit, miss, or sunk),
    // and return the result of the shot to display to the player.
    // You'll need to interact with the Board and Ship classes to handle this.

    // For demonstration purposes, let's assume a simple implementation:
    const opponentPlayer =
      this.players[(this.currentPlayerIndex + 1) % this.players.length];
    const shotResult = opponentPlayer.board.fireShot(target);
    return shotResult;
  }

  // Method to check for game over condition
  checkGameOver() {
    // Check if any player has all their ships sunk
    for (const player of this.players) {
      if (player.board.areAllShipSunk()) {
        console.log(`${player.name} has lost all their ships! Game Over.`);
        this.gameOver = true;
        return;
      }
    }

    // Check if only one player has ships remaining
    const activePlayers = this.players.filter(
      (player) => !player.board.areAllShipsSunk()
    );
    if (activePlayers.length === 1) {
      console.log(`${activePlayers[0].name} is the winner! Game Over.`);
      this.gameOver = true;
      return;
    }
  }

  // Other methods of the Game class will be implemented here
}

// Main entry point
const game = new Game();
game.start();
