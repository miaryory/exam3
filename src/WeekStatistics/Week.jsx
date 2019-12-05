import React from "react";
import Row from "./Row";
import "./Week.css";
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
            <th>Antal rigtige </th>
            <th>Antal vindere</th>
            <th>Gevinst</th>
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
