import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GameBoard from "../../src/ui/components/GameBoard";

describe("Battleship Game Integration Tests", () => {
  test("Should display the game board and ship placement form", () => {
    render(<GameBoard />);

    // Check if the game board and ship placement form are displayed
    expect(screen.getByText("Battleship Game")).toBeInTheDocument();
    expect(screen.getByText("Ship Placement")).toBeInTheDocument();
  });

  test("Should place a ship on the board", () => {
    render(<GameBoard />);

    // Select the ship type, enter the position, and click the "Place Ship" button
    fireEvent.change(screen.getByLabelText("Select Ship:"), {
      target: { value: "Carrier" },
    });
    fireEvent.change(screen.getByLabelText("X Position:"), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByLabelText("Y Position:"), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByLabelText("Select Direction:"), {
      target: { value: "horizontal" },
    });
    fireEvent.click(screen.getByText("Place Ship"));

    // Check if the ship has been placed on the board (you might need to adjust the cell selection based on your implementation)
    const shipCell = screen.getByTestId("cell-0-0");
    expect(shipCell).toHaveClass("S");
  });

  test("Should fire a shot on the opponent's board", () => {
    render(<GameBoard />);

    // Select the target position and click the "Fire Shot" button
    fireEvent.change(screen.getByLabelText("X Position:"), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText("Y Position:"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Fire Shot"));

    // Check the result of the shot (you might need to adjust the cell selection based on your implementation)
    const shotResultCell = screen.getByTestId("cell-5-5");
    expect(shotResultCell).toHaveClass("H"); // Assuming the shot hit a ship at position (5, 5)
  });
});
