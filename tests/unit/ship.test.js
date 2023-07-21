/* eslint-env jest */
// Import the Ship class from the appropriate location
import Ship from "../../src/ship";

describe("Ship Class Unit Tests", () => {
  // Test for ship initialization
  test("Should initialize the ship with the correct length and hit status", () => {
    
    // Create an instance of the Ship class
    const shipInstance = new Ship("Test Ship", 4);

    // Assertions to check ship length and hit status
    expect(shipInstance.size).toBe(4);
    expect(shipInstance.hits.length).toBe(4);
    expect(shipInstance.hits.every((hit) => hit === false)).toBe(true);
  });

  // Add more unit tests for the Ship class as needed
});
