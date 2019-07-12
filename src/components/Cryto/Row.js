import React from "react";

const Row = ({ cryto }) => {
  return (
    <tr>
      <td>{cryto.currency}</td>
      {cryto.quotes}
    </tr>
  );
};

export default Row;
