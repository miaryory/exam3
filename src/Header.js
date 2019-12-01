import React from "react";
import "./Header.css";
import logo from "./temp_assets/logo.png";

export default function Header() {
  return (
    <header>
      <img id="logoImg" src={logo}></img>

      <nav id="desktop-nav">
        <ul>
          <li>
            <a href="#home">Section1</a>
          </li>
          <li>
            <a href="#news">Section2</a>
          </li>
          <li>
            <a href="#contact">Section3</a>
          </li>
          <li>
            <a href="#about">Log in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
