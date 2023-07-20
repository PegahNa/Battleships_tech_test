// This React component represents a player's board UI.
import React from "react";
import Cell from "./Cell";

const PlayerBoard = ({ board }) => {
  return (
    <div className="player-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} value={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayerBoard;
