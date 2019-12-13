// import React, { Component } from "react";

// class BuyRows extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "20" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("You selected: " + this.state.value + " rows");
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Choose number of rows below:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//             <option value="20">20</option>
//             <option value="30">30</option>
//             <option value="40">40</option>
//             <option value="50">50</option>
//             <option value="60">60</option>
//             <option value="70">70</option>
//             <option value="80">80</option>
//             <option value="90">90</option>
//             <option value="100">100</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default BuyRows;

import React, { Component } from "react";
import Payment from "./Payment";

class BuyRows extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 10, showPayment: false };

    localStorage.setItem("rows", this.state.value);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hidePayment = this.hidePayment.bind(this);
  }

  handleChange(event) {
    localStorage.setItem("rows", event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert("You selected: " + localStorage.getItem("rows") + " rows");
    event.preventDefault();
    this.setState({ showPayment: true });
  }

  hidePayment() {
    this.setState({ showPayment: false });
  }

  render() {
    const total = this.state.value * 5;
    return (
      <>
        <Payment
          display={this.state.showPayment}
          hide={this.hidePayment}
          total={total}
        />
        <div className="slider-container">
          <form className="slider-form" onSubmit={this.handleSubmit}>
            <label>Choose number of rows below:</label>
            <input
              className="slider"
              value={this.state.value}
              onChange={this.handleChange}
              id="typeinp"
              type="range"
              min="10"
              max="100"
              step="10"
            />
            <p>{this.state.value} rows selected </p>
            <button className="buy-btn" type="submit">
              {total} KR - BUY NOW
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default BuyRows;
