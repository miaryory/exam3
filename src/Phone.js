import React from "react";
import "./App.css";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Denmark" };
  }

  render() {
    return (
      <PhoneInput
        className="phone"
        name="phone"
        placeholder="Enter phone number"
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}
export default Phone;
