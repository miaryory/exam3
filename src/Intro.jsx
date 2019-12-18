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
        <img className="intro-logo" alt="Logo" src={logo} />
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
            Subscribe and get directly on your email the weekly statistics and
            jackpot update
          </p>
        </div>
      </div>
    </div>
  );
}
