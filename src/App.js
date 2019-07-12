import React from "react";
import model from "./model";
import { StoreProvider, createStore } from "easy-peasy";
import Cryto from "./views/Cryto";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Cryto />
      </div>
    </StoreProvider>
  );
}

export default App;
