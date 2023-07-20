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
}

module.exports = Board;
