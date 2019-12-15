//https://codepen.io/codecompio/pen/ybjqgv?editors=0010

import React from "react";

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.timeInterval = null;
    let nextTarget = this.figureOutNextTargetDate();
    let targetDate = new Date(nextTarget);
    this.targetDate = targetDate.getTime();
    this.state = {
      timeRemaining: ""
    };
  }

  figureOutNextTargetDate() {
    let current = new Date();
    let nextdate = current.setDate(current.getDate() + 6);
    return nextdate;
  }

  getTimeTill(targetTime, callback) {
    let current = new Date();
    let currentTime = current.getTime();
    let millis = targetTime - currentTime;
    let f = Math.floor;
    let seconds = f(millis / 1000);
    let minutes = f(seconds / 60);
    let hours = f(minutes / 60);
    let daysRemaining = f(hours / 24);
    let hoursRemaning = hours % 24;
    let minutesRemaning = minutes % 60;
    let secondsRemaning = seconds % 60;

    let timeRemaing = {
      days: daysRemaining,
      hours: hoursRemaning,
      minutes: minutesRemaning,
      seconds: secondsRemaning
    };
    callback(timeRemaing);
  }
  componentDidMount() {
    this.getTimeTill(this.targetDate, timeRemaining => {
      this.setState({ timeRemaining: timeRemaining });
    });

    this.timeInterval = setInterval(() => {
      this.getTimeTill(this.targetDate, timeRemaining => {
        this.setState({
          timeRemaining
        });
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    return (
      <div id="countDown">
        <section>
          <div className="days-section">
            <h1>{this.state.timeRemaining.days}</h1>
            <p> days </p>
          </div>
          <div className="hours-section">
            <h1>{this.state.timeRemaining.hours}</h1>
            <p>hours</p>
          </div>
          <div className="minutes-section">
            <h1>{this.state.timeRemaining.minutes}</h1>
            <p>minutes</p>
          </div>
          <div className="seconds-section">
            <h1>{this.state.timeRemaining.seconds}</h1>
            <p>seconds</p>
          </div>
        </section>
      </div>
    );
  }
}
