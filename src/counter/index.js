import React from "react";
import { Container } from "./container";
import { incrementCount } from "./actions";
import { useCounterContext } from "./context";

const ConnectedCounter = () => {
  const [state, dispatch] = useCounterContext();

  const mapAllToProps = {
    onIncrement: () => incrementCount(dispatch),
    count: state.count,
    isCalculating: state.isCalculating
  };

  return <Container {...mapAllToProps} />;
};

export { ConnectedCounter };