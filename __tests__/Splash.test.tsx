import React from "react";
import { render, screen } from "@testing-library/react-native";
import SplashScreen from "../screens/Splash";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";

const setup = () => {
  render(
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>,
  );
};

test("renders correctly", () => {
  setup();
  expect(screen.getByText("Get started")).toBeTruthy();
});
