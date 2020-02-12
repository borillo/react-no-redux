import React from "react";
import "./App.css";
import { ConnectedCounter } from "./counter";

const Container = () => {
  return (
    <div className="App">
      <ConnectedCounter />
    </div>
  );
};

export default Container;