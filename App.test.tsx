import * as React from "react";
import { render, screen } from "@testing-library/react-native";

// import { render, fireEvent } from "./test-utils";
import App from "./App";

test("examples of some things", () => {
  render(<App />);

  expect(screen.toJSON()).toMatchSnapshot();
});
