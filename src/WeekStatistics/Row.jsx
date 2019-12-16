import React from "react";
import Data from "./Data";

export default function Row(props) {
  return (
    <>
      <tr>
        <td className="col-one">7 right numbers</td>
        <Data result={props.week.winners7} />
      </tr>
      <tr>
        <td className="col-one">6 right numbers</td>
        <Data result={props.week.winners6} />
      </tr>
      <tr>
        <td className="col-one">5 right numbers</td>
        <Data result={props.week.winners5} />
      </tr>
      <tr>
        <td className="col-one">4 right numbers</td>
        <Data result={props.week.winners4} />
      </tr>
    </>
  );
}
