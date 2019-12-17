import React from "react";
import Game from "./Game";
import "./Game.css";

export default function SlotMachine() {
  return (
    <div className="slotmachine-container">
      <div className="text-container">
        <h1 id="gameH1"> Click "Spin" to start</h1>
        <p id="gameDesc">
          Match three dice and win 5 extra rows with your next Lucky 7 lottery
          purchase!
        </p>
      </div>
      <Game />
      <div className="guide">
        <ul>
          <p>
            <b>How it works:</b>
          </p>
          <li>
            You are awarded 3 free spins to get the chance to win free rows
          </li>

          <li>
            To claim the gain, your purchase must include at least 10 rows
          </li>

          <li>The award will be added to your product at the checkout</li>
        </ul>
      </div>
    </div>
  );
}
