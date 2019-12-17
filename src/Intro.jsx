import React from "react";
import logo from "./assets/logo.png";
import chance from "./assets/chance.png";
import jackpot from "./assets/jackpot.png";
import newsletter from "./assets/newsletter.png";
import "./App.css";

export default function Intro() {
  return (
    <div className="game-intro">
      <div className="advantages">
        <img alt="Logo" src={logo} />
        <div>
          <img src={chance} alt="Chance" />
          <p>Improve your odds with the free spins on first purchase</p>
        </div>
        <div>
          <img src={jackpot} alt="Jackpot" />
          <p>Take part in the quest of one of the biggest jackpot</p>
        </div>
        <div>
          <img src={newsletter} alt="Newsletter" />
          <p>
            Get directly on your email the weekly statistics and jackpot update
          </p>
        </div>
      </div>

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
