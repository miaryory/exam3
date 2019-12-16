import React from "react";
import Row from "./Row";
import WinningNumbers from "./WinningNumbers";

export default function Sorted(props) {
  return (
    <>
      <div>
        {props.winners.map(item => {
          if (item.date === props.date) {
            return <WinningNumbers key={item.date} week={item} />;
          }
          return null;
        })}
      </div>

      <table>
        <thead>
          <tr>
            <th>Number of right numbers</th>
            <th>Amount of winners</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody>
          {props.winners.map(item => {
            if (item.date === props.date) {
              return <Row key={item.date} week={item} />;
            }
            return null;
          })}
        </tbody>
      </table>
    </>
  );
}
