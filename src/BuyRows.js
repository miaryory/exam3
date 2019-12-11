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

class BuyRows extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "20" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("You selected: " + this.state.value + " rows");
    event.preventDefault();
  }

  render() {
    return (
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

          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.value} rows selected </p>
        <p>{this.state.value * 5} KR - BUY NOW </p>
      </div>
    );
  }
}

export default BuyRows;
