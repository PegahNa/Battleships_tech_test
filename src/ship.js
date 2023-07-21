// The Ship class represents a ship in the game and communicates
// with the Board class to validate placements and update the board state.

class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.hits = new Array(this.size).fill(false); // Use this.size instead of length
  }

  // Method to mark the ship as hit at the specified index
  hit(index) {
    if (index >= 0 && index < this.size) {
      this.hits[index] = true;
    }
  }

  // Method to check if the ship is sunk
  isSunk() {
    return this.hits.every((hit) => hit === true);
  }
}

module.exports = Ship;
