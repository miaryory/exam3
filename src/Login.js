import React, { Component } from "react";
import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit(event) {
    alert(
      "A username was submitted: " +
        this.state.username +
        " ." +
        "A password was submitted:" +
        this.state.password +
        " ."
    );
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-login" onSubmit={this.handleSubmit}>
        <label className="form-login-label-username" htmlFor="username">
          Username:
        </label>
        <input
          className="form-login-input-username"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label className="form-login-label-password" htmlFor="password">
          Password:
        </label>
        <input
          className="form-login-input-password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input className="form-login-submit" type="submit" value="Log in" />
      </form>
    );
  }
}
export default Login;
