import React, { Fragment, useEffect } from "react";
import { useStoreState, useActions } from "easy-peasy";
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
