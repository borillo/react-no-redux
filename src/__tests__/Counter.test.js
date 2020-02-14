import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import { ConnectedCounter } from "../counter";

test("counter should begin on zero", () => {
  const { getByText } = render(<ConnectedCounter />);

  expect(getByText("0")).toBeInTheDocument();
});

test("should increment after the button is pressed ", () => {
  const { getByText } = render(<ConnectedCounter />);

  const button = getByText(/increment/i);

  fireEvent.click(button);

  wait(() => expect(getByText("1")).toBeInTheDocument());
});
