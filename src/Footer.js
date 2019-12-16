import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer id="footer">
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
      </footer>
    </>
  );
}
