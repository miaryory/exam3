import React from "react";
import Data from "./Data";

export default function Row(props) {
  return (
    <>
      <tr>
        <td className="col-one">7 rigtige</td>
        <Data result={props.week.winners7} />
      </tr>
      <tr>
        <td className="col-one">6+t rigtige</td>
        <Data result={props.week.winners6t} />
      </tr>
      <tr>
        <td className="col-one">6 rigtige</td>
        <Data result={props.week.winners6} />
      </tr>
      <tr>
        <td className="col-one">5 rigtige</td>
        <Data result={props.week.winners5} />
      </tr>
      <tr>
        <td className="col-one">4 rigtige</td>
        <Data result={props.week.winners4} />
      </tr>
    </>
  );
}
