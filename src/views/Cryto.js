import React, { Fragment } from "react";
import { useStoreState } from "easy-peasy";
import Table from "./../components/Cryto/Table";
const Cryto = () => {
  const data = useStoreState(state => state.crytos);
  return (
    <Fragment>
      <Table crytos={data} />
    </Fragment>
  );
};

export default Cryto;
