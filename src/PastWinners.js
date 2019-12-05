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
      <>
        <select onClick={this.handleClick}>
          <option value="23 November">23 November</option>
          <option value="16 November">16 November</option>
          <option value="09 November">09 November</option>
          <option value="02 November">02 November</option>
        </select>

        <Week date={week} winners={this.props.winners} />
      </>
    );
  }
}

export default PastWinners;
