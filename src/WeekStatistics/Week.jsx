import React from "react";
import Table from "react-bootstrap/Table";
import Row from "./Row";

export default function Sorted(props) {
  return (
    <Table striped bordered hover>
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
    </Table>
  );
}
