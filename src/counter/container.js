import React from "react";
import { Counter } from "./component";
import { counterReducer, initialState } from "./reducer";
import { incrementCount } from "./actions";
import {useCounterContext} from './context'

const Container = () => {
  const [state, dispatch] = useCounterContext(counterReducer, initialState);

  const handleIncrement = () => {
    incrementCount(dispatch);
  };

  return <Counter onIncrement={handleIncrement} count={state.count} />;
};

export { Container };
