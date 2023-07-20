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
}

module.exports = Board;
