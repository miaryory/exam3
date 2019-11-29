import React from "react";

export default function Data(props) {
  return (
    <>
      <td>{props.result.number}</td>
      <td>{props.result.price + " kr"}</td>
    </>
  );
}
