import React from "react";
import ReactCardFlip from "react-card-flip";
import "./FlipCard.css";

export default class FlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.showBack = this.showBack.bind(this);
    this.showFront = this.showFront.bind(this);
  }

  showBack(e) {
    e.preventDefault();
    // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    this.setState({ isFlipped: true });
  }

  showFront(e) {
    e.preventDefault();
    // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    this.setState({ isFlipped: false });
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront="0.5"
        flipSpeedFrontToBack="0.5"
      >
        <div className="one-card" onMouseEnter={this.showBack}>
          {this.props.front}
        </div>

        <div className="one-card" onMouseLeave={this.showFront}>
          {this.props.back}
        </div>
      </ReactCardFlip>
    );
  }
}
