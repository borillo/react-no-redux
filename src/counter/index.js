import React, { useReducer } from "react";

import { CounterService } from "./services/CounterService";
import { Counter } from "./components/Counter";
import { Loader } from "./components/Loader";

export const INCREMENT_START = "INCREMENT_START";
export const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";

const initialState = {
  count: 0,
  isCalculating: false
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_START:
      return {
        ...state,
        isCalculating: true
      };
    case INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
        isCalculating: false
      };
    default:
      return {
        ...state
      };
  }
};

function useCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  async function onIncrement() {
    dispatch({ type: INCREMENT_START });

    await CounterService.costlyIncrement();

    dispatch({ type: INCREMENT_SUCCESS });
  }

  return {
    ...state,
    onIncrement
  };
}

const ConnectedCounter = () => {
  const { isCalculating, count, onIncrement } = useCounter();

  return (
    <>
      {isCalculating ? <Loader /> : <Counter count={count} />}
      <button onClick={onIncrement}>Increment</button>
    </>
  );
};

export { ConnectedCounter };
