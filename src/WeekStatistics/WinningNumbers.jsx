import React from "react";
import Hexagon from "./hexagon.png";

export default function WinningNumbers(props) {
  return (
    <div className="winning-numbers">
      {props.week.winningnumbers.map(number => {
        return (
          <div key={number} className="one-number">
            <p>{number}</p>
            <img className="hexagon" src={Hexagon} alt="Number" />
          </div>
        );
      })}
    </div>
  );
}
