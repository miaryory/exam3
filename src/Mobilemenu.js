import React from "react";
import "./App.css";
import "./Header.css";
import { slide as Menu } from "react-burger-menu";

class Mobilemenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="menu-mobile">
        <Menu>
          <a className="menu-item" href="#home">
            Section1
          </a>

          <a className="menu-item" href="#news">
            Section2
          </a>
          <a onClick={this.showSettings} className="menu-item" href="#news">
            Section3
          </a>

          {/* <a
            onClick={this.showSettings}
            className="menu-item"
            onClick={openModal}
            href="#about"
          >
            Log in
          </a> */}
        </Menu>
      </div>
    );
  }
}
export default Mobilemenu;
