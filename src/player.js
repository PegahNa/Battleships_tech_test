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
}

module.exports = Player;
