// The Ship class represents a ship in the game and communicates
// with the Board class to validate placements and update the board state.
class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.hits = new Array(size).fill(false);
  }

  // Method to mark the ship as hit at the specified index
  hit(index) {
    if (index >= 0 && index < this.size) {
      this.hits[index] = true;
    }
  }
}

module.exports = Ship;
