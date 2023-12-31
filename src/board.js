// The Board class manages the game board, tracks ship placements,
// and handles shot validations. It communicates with the Player
// and Ship classes.

class Board {
  constructor() {
    this.size = 10; // Assuming a square board with a size of 10x10
    this.grid = this.createEmptyGrid(); // Initialize an empty grid
  }

  // Method to create an empty grid
  createEmptyGrid() {
    const grid = new Array(this.size)
      .fill(null)
      .map(() => new Array(this.size).fill(null));
    return grid;
  }

  // Method to place a ship on the board
  placeShip(ship, position, direction) {
    // Implement the logic to place the ship on the board
    // based on the given position and direction.
    // For simplicity, let's assume a basic implementation:
    const { x, y } = position;
    const shipLength = ship.size;

    if (direction === "horizontal") {
      for (let i = x; i < x + shipLength; i++) {
        this.grid[y][i] = ship;
      }
    } else if (direction === "vertical") {
      for (let i = y; i < y + shipLength; i++) {
        this.grid[i][x] = ship;
      }
    }
  }

  // Method to fire a shot at the specified target
  fireShot(target) {
    const { x, y } = target;
    const cell = this.grid[y][x];

    if (cell === null) {
      // Miss
      this.grid[y][x] = "M"; // Mark as a miss on the board
      return "Miss";
    } else if (cell === "M" || cell === "H") {
      // Cell already fired at (either hit or miss)
      return "Already fired at this location.";
    } else {
      // Hit
      cell.hit(); // Assuming the Ship class has a `hit()` method to handle hits
      this.grid[y][x] = "H"; // Mark as a hit on the board
      if (cell.isSunk()) {
        return "Hit! Ship is sunk!";
      } else {
        return "Hit!";
      }
    }
  }

  // Method to check if a ship placement is valid
  isValidPlacement(ship, position, direction) {
    // Implement the logic to check if the ship placement is valid.
    // For example, check if the ship fits within the board boundaries,
    // does not overlap with other ships, and is placed within empty cells.
    // You'll need to interact with the Ship class to get its size and check for overlaps.

    // For simplicity, we'll assume a valid placement if the ship fits within the board.
    const { x, y } = position;
    const shipLength = ship.size;

    if (direction === "horizontal" && x + shipLength <= this.size) {
      for (let i = x; i < x + shipLength; i++) {
        if (this.grid[y][i] !== null) {
          return false; // Overlapping with another ship
        }
      }
      return true;
    } else if (direction === "vertical" && y + shipLength <= this.size) {
      for (let i = y; i < y + shipLength; i++) {
        if (this.grid[i][x] !== null) {
          return false; // Overlapping with another ship
        }
      }
      return true;
    }

    return false;
  }

  // Method to check if all ships on the board are sunk
  areAllShipsSunk() {
    // Check if all ships on the board are sunk.
    // You'll need to interact with the Ship class to check their status.

    // For simplicity, let's assume all ships are sunk if there are no ships on the board.
    return this.grid
      .flat()
      .every((cell) => cell === null || cell === "M" || cell === "H");
  }
}

module.exports = Board;
