import React from "react";
import Row from "./Row";
const Table = ({ crytos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Currency</th>
          <th scope="col">Buy</th>
          <th scope="col">Sell</th>
          <th scope="col">Profit</th>
        </tr>
      </thead>
      <tbody>
        {crytos.map((item, i) => {
          return <Row cryto={item} key={i} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
