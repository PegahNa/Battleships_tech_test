// The Ship class represents a ship in the game and communicates
// with the Board class to validate placements and update the board state.
class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.hits = new Array(size).fill(false);
  }

  // Methods related to ship status and behavior
}

module.exports = Ship;
