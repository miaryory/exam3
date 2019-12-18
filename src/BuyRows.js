import React, { Component } from "react";
import Payment from "./Payment";
import Login from "./Login";

class BuyRows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
      showPayment: false,
      showLogIn: false
    };
    localStorage.setItem("rows", this.state.value);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hidePayment = this.hidePayment.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
  }

  handleChange(event) {
    localStorage.setItem("rows", event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const isLogged = localStorage.getItem("logStatus");
    event.preventDefault();
    if (isLogged === "true") {
      this.setState({ showLogIn: false });
      this.setState({ showPayment: true });
    } else {
      this.setState({ showPayment: false });
      this.setState({ showLogIn: true });
    }
  }

  hidePayment() {
    this.setState({ showPayment: false });
  }

  hideLogin() {
    this.setState({ showLogIn: false });
  }

  render() {
    const total = this.state.value * 5;

    return (
      <section className="purchase-section">
        <Login display={this.state.showLogIn} hide={this.hideLogin} />
        <Payment
          display={this.state.showPayment}
          hide={this.hidePayment}
          total={total}
        />

        <div id="slider-container">
          <div className="guide">
            <ul>
              <p>
                <b>How to play Lucky 7:</b>
              </p>
              <li>
                Each week a row of 7 random numbers are drawn. Each number is between 1 and 20.
              </li>

              <li>
                To participate you must buy at least 10 rows. Each row has 7 random numbers between 1 and 20.
              </li>

              <li>The objective is to get a row matching the winning row. If you have all 7 numbers correct you win the jackpot.</li>
              <li>The numbers in your row must be in the same order as the winning row for it to count as a win</li>
              <li>If you get more than 3 correct numbers you win a cash prize. Having more correct numbers means winning a bigger prize.</li>
            </ul>
          </div>
          <form className="slider-form" onSubmit={this.handleSubmit}>
            <label>Buy rows here:</label>

            <input
              className="slider"
              value={this.state.value}
              id="typeinp"
              type="range"
              min="10"
              max="100"
              step="10"
              onChange={this.handleChange}
            />
            <p className="rows-number">{this.state.value} rows selected </p>
            <button className="buy-btn" type="submit">
              {total} KR - BUY NOW
            </button>
          </form>
        </div>
        <p className="game-warning">
          * Lucky 7 is a real-money gambling application. Please be responsible
          when spending on this game. Gambling can be addictive.
        </p>
      </section>
    );
  }
}

export default BuyRows;
