import React from "react";
import { Container } from "./container";
import { obtainList } from "./actions";
import { usePeopleContext } from "./context";

const ConnectedPeople = () => {
  const [state, dispatch] = usePeopleContext();

  const mapAllToProps = {
    obtainList: () => obtainList(dispatch),
    people: state.people,
    isLoading: state.isLoading
  };

  return <Container {...mapAllToProps} />;
};

export { ConnectedPeople };