import React from "react";
import "./Week.css";

export default function WinningNumbers(props) {
  return (
    <div className="winning-numbers">
      {props.week.winningnumbers.map(number => {
        return <p key={number}>{number}</p>;
      })}
    </div>
  );
}
