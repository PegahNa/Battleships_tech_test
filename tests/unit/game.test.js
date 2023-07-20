// Import the Game class from the appropriate location
import Game from "../../src/game";

// Mock the dependencies (Board, Player, and Ship classes) for unit testing
jest.mock("../../src/board");
jest.mock("../../src/player");
jest.mock("../../src/ship");

describe("Game Class Unit Tests", () => {
  // Test for game initialization
  test("Should initialize the game with the correct board and players", () => {
    // Create instances of the mocked Board, Player, and Ship classes
    const boardInstance = new (require("../../src/board").default)();
    const player1Instance = new (require("../../src/player").default)();
    const player2Instance = new (require("../../src/player").default)();

    // Create an instance of the Game class
    const gameInstance = new Game(
      boardInstance,
      player1Instance,
      player2Instance
    );

    // Assertions to check if the game is correctly initialized
    expect(gameInstance.board).toBe(boardInstance);
    expect(gameInstance.players).toEqual([player1Instance, player2Instance]);
    expect(gameInstance.currentPlayerIndex).toBe(0);
  });

  // Add more unit tests for the Game class as needed
});
