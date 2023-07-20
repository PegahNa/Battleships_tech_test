import React from "react";
import ReactDOM from "react-dom";
import GameBoard from "./ui/components/GameBoard";

const root = document.getElementById("root");

// Use createRoot to render your app
ReactDOM.createRoot(root).render(<GameBoard />);
