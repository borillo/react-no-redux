import React from "react";
import "./App.css";
import { ConnectedCounter as Counter} from "./counter";
import { ConnectedPeople as People } from './people'

const Container = () => {
  return (
    <div className="App">
      <Counter />
      <People />
    </div>
  );
};

export default Container;