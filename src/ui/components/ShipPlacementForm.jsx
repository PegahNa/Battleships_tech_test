// This React component represents a form for placing ships.
import React, { useState } from "react";
import PropTypes from "prop-types"; // Import prop-types

const ShipPlacementForm = ({ onPlaceShip }) => {
  const [ship, setShip] = useState("Carrier"); // Default ship type is Carrier
  const [position, setPosition] = useState({ x: "", y: "" }); // The position to place the ship
  const [direction, setDirection] = useState("horizontal"); // Default direction is horizontal

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onPlaceShip function with the selected ship, position, and direction
    onPlaceShip(ship, position, direction);
    // Clear the form inputs after ship placement
    setShip("Carrier");
    setPosition({ x: "", y: "" });
    setDirection("horizontal");
  };

  return (
    <div className="ship-placement-form">
      <h2>Ship Placement</h2>
      <form onSubmit={handleSubmit}>
        {/* Select the ship type */}
        <label htmlFor="ship">Select Ship:</label>
        <select
          id="ship"
          value={ship}
          onChange={(e) => setShip(e.target.value)}
        >
          <option value="Carrier">Carrier</option>
          <option value="Battleship">Battleship</option>
          {/* Add other ship options */}
        </select>

        {/* Input for X position */}
        <label htmlFor="x">X Position:</label>
        <input
          type="number"
          id="x"
          value={position.x}
          onChange={(e) => setPosition({ ...position, x: e.target.value })}
          placeholder="X (0-9)"
        />

        {/* Input for Y position */}
        <label htmlFor="y">Y Position:</label>
        <input
          type="number"
          id="y"
          value={position.y}
          onChange={(e) => setPosition({ ...position, y: e.target.value })}
          placeholder="Y (0-9)"
        />

        {/* Select the ship direction */}
        <label htmlFor="direction">Select Direction:</label>
        <select
          id="direction"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        >
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>

        <button type="submit">Place Ship</button>
      </form>
    </div>
  );
};

// Prop validation for the 'onPlaceShip' prop
ShipPlacementForm.propTypes = {
  onPlaceShip: PropTypes.func.isRequired,
};

export default ShipPlacementForm;
