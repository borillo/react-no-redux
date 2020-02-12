import React from "react";
import { Counter, Loader} from "./components";

const Container = ({ onIncrement, isCalculating, ...props }) => {

  return (
    <>
      {isCalculating ? <Loader/> : <Counter {...props} />}
      <button onClick={onIncrement}>Increment</button>
    </>
  );
};

export { Container };
