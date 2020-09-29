import React from "react";
import { render } from "react-native-testing-library";
import { Button } from "./Button";

const mockOnPress = jest.fn();

describe("Button component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Button buttonText="test" onPress={mockOnPress} />
    );

    getByText("TEST");
  });
});
