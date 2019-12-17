import React from "react";
import "./Footer.css";
import age from "./assets/18.png";
import gambling from "./assets/gambling.png";
import secure from "./assets/secure.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div id="footer">
          <div id="col1">
            {/* logo here */}
            <ul>
              <li>
                <p>
                  Lygten 16
                  <br />
                  2200 Copenhagen N
                </p>
              </li>
              <li>
                <a href="#footer">Accountability</a>
              </li>
            </ul>
          </div>
          <div id="col2">
            <ul>
              <li>
                <a href="#footer">Privacy policy</a>
              </li>
              <li>
                <a href="#footer">Terms and conditions</a>
              </li>
            </ul>
          </div>
          <p>© 2019 LUCKY 7 </p>
        </div>
        <div className="footer-icons">
          <img alt="Age requirements" src={age} />
          <img alt="Secure" src={secure} />
          <img id="gambling-pic" alt="Gambling commision" src={gambling} />
        </div>
      </footer>
    </>
  );
}
