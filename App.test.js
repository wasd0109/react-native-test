import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import App from "./App";

const mockFn = jest.fn();

describe("App Component function properly", () => {
  test("Email field allows input and reflect change", async () => {
    const { getByPlaceholderText, findByText, findByDisplayValue } = render(
      <App onChangeText={mockFn} />
    );
    const emailFieldRef = getByPlaceholderText("Email");
    fireEvent.changeText(emailFieldRef, "wasd0109@gmail.com");
    expect(emailFieldRef.props.value).toEqual("wasd0109@gmail.com");
  });
});
