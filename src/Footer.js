import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <p>© 2019 LUCKY 7 </p>
        <div id="col1">
          <h3>Title here</h3>

          <ul>
            <li>
              <a href="#fullGame">Game</a>
            </li>
            <li>
              <a href="#slider-container">Buy Rows</a>
            </li>
          </ul>
        </div>
        <div id="col2">
          <h3>Title here</h3>
          <ul>
            <li>
              <a href="#fourThings">More Options</a>
            </li>
            <li>
              <a href="#winners-section">Past Winners</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
