import React from "react";
import Row from "./Row";
const Table = ({ crytos }) => {
  return (
    <table>
      {crytos.map((item, i) => {
        return <Row cryto={item} />;
      })}
    </table>
  );
};

export default Table;
