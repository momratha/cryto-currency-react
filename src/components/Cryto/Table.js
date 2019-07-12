import React from "react";
import Row from "./Row";
const Table = ({ crytos }) => {
  return (
    <table className="table">
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Currency</th>
        <th scope="col">Buy</th>
        <th scope="col">Sell</th>
        <th scope="col">Profit</th>
      </tr>
      <tbody>
        {crytos.map(item => {
          return <Row cryto={item} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
