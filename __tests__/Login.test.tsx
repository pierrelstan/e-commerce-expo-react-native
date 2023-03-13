import React from "react";
import { render, screen } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
import Login from "../screens/Login";

describe("Slash Screen", () => {
  const setup = () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );
  };

  test("should have a text: welcome back", () => {
    setup();
    expect(screen.getByText("Welcome back")).toBeTruthy();
  });
});
