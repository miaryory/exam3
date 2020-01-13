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
          <img className="intro-icon" src={chance} alt="Chance" />
          <p>Win 5 free rows with your next Lucky 7 purchase</p>
        </div>
        <div>
          <img className="intro-icon" src={jackpot} alt="Jackpot" />
          <p>It's completely free. No sign-up required for the first spin</p>
        </div>
        <div>
          <img className="intro-icon" src={newsletter} alt="Newsletter" />
          <p>Subscribe to our newsletter to get 3 more spins for free!</p>
        </div>
      </div>
    </div>
  );
}
