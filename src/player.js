// The Player class represents a player in the game and interacts
// with the Board class for ship placements and firing shots.
class Player {
  constructor(name) {
    this.name = name;
    this.board = new board();
    this.ships = [];
  }

  // Method to place a ship on the player's board
  placeShip(ship, position, direction) {
    // Check if the placement is valid and the ship doesn't overlap with other ships
    if (this.board.isValidPlacement(ship, position, direction)) {
      this.board.placeShip(ship, position, direction);
      this.ships.push(ship);
      console.log(
        `${this.name} placed a ${ship.name} at ${position} facing ${direction}.`
      );
    } else {
      console.log("Invalid ship placement. Try again.");
    }
  }

  // Method to get the target location to fire a shot
  getShotTarget() {
    // Implement the logic to get the target location for firing a shot
    // For example, you can prompt the player to enter the coordinates of the target.
    // You can use readline-sync or any other method to get input from the player.
    // Return the target location (e.g., { x: 2, y: 4 }) to the game.
    const target = {
      x: Math.floor(Math.random() * 10),
      y: Math.floor(Math.random() * 10),
    };
    return target;
  }

  // Other methods of the Player class will be implemented here
  //   handleShotResult(target, result): This method can be added to handle the result of a shot fired by the player. It will process the shot result, update the player's board, and perform any necessary actions, such as checking if a ship is hit, sunk, or if the game is over.

  // getRemainingShips(): This method can be added to get a list of the player's ships that are not yet sunk. It will help in displaying the player's remaining fleet and possibly help with strategy during the game.

  // isAllShipsSunk(): This method can be added to check if all the player's ships are sunk. It can be used in the checkGameOver() method of the Game class to determine if the game is over.

  // automateTurn(): This method can be added to automate the player's turn in a single-player mode or during testing. It could randomly generate the target for firing a shot or use a predefined strategy for AI-controlled players.

  // saveGameProgress() and loadGameProgress(): These methods can be added to save the game progress and load it later so that players can resume the game from where they left off.

  // showBoard(): This method can be added to display the player's board, showing ship placements, hits, and misses. It will be helpful for the player to see their own board during the game.

  // showOpponentBoard(): This method can be added to display the opponent's board, showing hits, misses, and any visible parts of their ships. This will be helpful for players to plan their next moves strategically.
}

module.exports = Player;
