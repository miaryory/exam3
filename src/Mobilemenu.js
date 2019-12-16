import React from "react";
import "./App.css";
import "./Header.css";
import { slide as Menu } from "react-burger-menu";

class Mobilemenu extends React.Component {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="#fullGame">
          Game
        </a>
        <a className="menu-item" href="#slider-container">
          Buy Rows
        </a>
        <a className="menu-item" href="#fourThings">
          Options
        </a>
        <a className="menu-item--small" href="#winners-section">
          Winners
        </a>
      </Menu>
    );
  }
}
export default Mobilemenu;

// class Mobilemenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menuOpen: false
//     };
//   }

//   // This keeps your state in sync with the opening/closing of the menu
//   // via the default means, e.g. clicking the X, pressing the ESC key etc.
//   handleStateChange(state) {
//     this.setState({ menuOpen: state.isOpen });
//   }

//   // This can be used to close the menu, e.g. when a user clicks a menu item
//   closeMenu() {
//     this.setState({ menuOpen: false });
//   }

//   // This can be used to toggle the menu, e.g. when using a custom icon
//   // Tip: You probably want to hide either/both default icons if using a custom icon
//   // See https://github.com/negomi/react-burger-menu#custom-icons
//   toggleMenu() {
//     this.setState(state => ({ menuOpen: !state.menuOpen }));
//   }

//   render() {
//     return (
//       <div>
//         <Menu
//           isOpen={this.state.menuOpen}
//           onStateChange={state => this.handleStateChange(state)}
//         >
//           <a onClick={() => this.closeMenu()}>Home</a>
//           <a onClick={() => this.closeMenu()}>About</a>
//           <a onClick={() => this.closeMenu()}>Contact</a>
//           <a onClick={() => this.closeMenu()}>Settings</a>
//         </Menu>
//         <a onClick={() => this.toggleMenu()} />
//       </div>
//     );
//   }
// }
// export default Mobilemenu;
