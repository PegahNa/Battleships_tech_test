/* eslint-env jest */
// Import the Player class from the appropriate location
const Player = require("../../src/player");

describe("Player Class Unit Tests", () => {
  // Test for player initialization
  test("Should initialize the player with the correct name and an empty list of ships", () => {
    const playerName = "Player 1";

    // Create an instance of the Player class
    const playerInstance = new Player(playerName);

    // Assertions to check player name and ships
    expect(playerInstance.name).toBe(playerName);
    expect(playerInstance.ships.length).toBe(0);
  });

  // Add more unit tests for the Player class as needed
});
