import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Week from "./WeekStatistics/Week";

class PastWinners extends Component {
  constructor(props) {
    super(props);
    this.state = { week: "23 November" };
  }

  handleClick = e => {
    this.setState({ week: e.target.dataset.week });
  };

  render() {
    const { week } = this.state;
    return (
      <>
        <DropdownButton id="dropdown-basic-button" title="Weekly statistics">
          <Dropdown.Item onClick={this.handleClick} data-week="23 November">
            23 November
          </Dropdown.Item>
          <Dropdown.Item onClick={this.handleClick} data-week="16 November">
            16 November
          </Dropdown.Item>
          <Dropdown.Item onClick={this.handleClick} data-week="09 November">
            09 November
          </Dropdown.Item>
          <Dropdown.Item onClick={this.handleClick} data-week="02 November">
            02 November
          </Dropdown.Item>
        </DropdownButton>

        <Week date={week} winners={this.props.winners} />
      </>
    );
  }
}

export default PastWinners;
