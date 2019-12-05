import React, { Component } from "react";
import Week from "./WeekStatistics/Week";

class PastWinners extends Component {
  constructor(props) {
    super(props);
    this.state = { week: "23 November" };
  }

  handleClick = e => {
    this.setState({ week: e.target.value });
  };

  render() {
    const { week } = this.state;
    return (
      <section className="winners-section">
        <select className="dropdwon-select" onClick={this.handleClick}>
          <option value="23 November">Draw of 23 November</option>
          <option value="16 November"> Draw of 16 November</option>
          <option value="09 November">Draw of 09 November</option>
          <option value="02 November">Draw of 02 November</option>
        </select>

        <h1>Winning numbers</h1>
        <Week date={week} winners={this.props.winners} />
      </section>
    );
  }
}

export default PastWinners;
