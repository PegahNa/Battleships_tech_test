// Import the correct Game class from the appropriate location
// Make sure the Game class is exported correctly
/* eslint-env jest */
// Corrected import statements for Board and Player classes
const Board = require("../../src/board");
const Player = require("../../src/player");
const Game = require("../../src/game");

// Mock the dependencies (Board, Player, and Ship classes) for unit testing
jest.mock("../../src/board");
jest.mock("../../src/player");
jest.mock("../../src/ship");

describe("Game Class Unit Tests", () => {
  // Test for game initialization
  test("Should initialize the game with the correct board and players", () => {
    // Create instances of the mocked Board, Player, and Ship classes
    const boardInstance = new Board();
    const player1Instance = new Player("Player 1"); // Provide a name for Player 1
    const player2Instance = new Player("Player 2"); // Provide a name for Player 2

    // Create an instance of the Game class
    const gameInstance = new Game();

    // Add players to the game
    gameInstance.addPlayer(player1Instance);
    gameInstance.addPlayer(player2Instance);

    // Assertions to check if the game is correctly initialized
    expect(gameInstance.board).toBe(boardInstance);
    expect(gameInstance.players).toEqual([player1Instance, player2Instance]);
    expect(gameInstance.currentPlayerIndex).toBe(0);
  });

  // Add more unit tests for the Game class as needed
});
