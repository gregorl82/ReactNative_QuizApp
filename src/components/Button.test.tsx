import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import { Button } from "./Button";

const mockOnPress = jest.fn();

describe("Button component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders correctly", () => {
    const { getByText } = render(
      <Button buttonText="test" onPress={mockOnPress} />
    );

    getByText("TEST");
  });

  it("responds to press", () => {
    const { getByText } = render(
      <Button buttonText="test" onPress={mockOnPress} />
    );

    fireEvent.press(getByText("TEST"));

    expect(mockOnPress).toHaveBeenCalled();
  });
});
