import React from "react";
import "./Footer.css";
import age from "./assets/18.png";
import gambling from "./assets/gambling.png";
import secure from "./assets/secure.png";
import logo from "./assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div id="footer">
          <div id="col1">
            <img id="logofooter" alt="Logo" src={logo}></img>
            <p>Lygten 16</p>
            <p> 2200 Copenhagen N</p>
            <p>© 2019 LUCKY 7 </p>
          </div>
          <div id="col2">
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
            <p>Accountability</p>
          </div>
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
