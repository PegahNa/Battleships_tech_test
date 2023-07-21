// This React component represents a player's board UI.
import React from 'react';
import PropTypes from 'prop-types';

const PlayerBoard = ({ board }) => {
  return (
    <div className="player-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayerBoard;