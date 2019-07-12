import React from "react";
import moment from "moment";
const Row = ({ cryto }) => {
  const reduceWhich = (arr, comparator = (a, b) => a - b) =>
    arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
  const min = reduceWhich(cryto.quotes);
  const max = reduceWhich(cryto.quotes, (a, b) => b.price - a.price);
  return (
    <tr>
      <th scope="row">{moment(cryto.date).format("DD-MMMM-YYYY")}</th>
      <td>{cryto.currency}</td>
      <td>
        ${min.price} at {moment(min.time, "hmm").format("LT")}
      </td>
      <td>
        ${max.price} at {moment(max.time, "hmm").format("LT")}
      </td>
      <td>${(max.price - min.price).toFixed(2)}</td>
    </tr>
  );
};

export default Row;
