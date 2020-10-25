import React from "react";
import { render } from "@testing-library/react-native";
import { AnswerDisplay } from "../AnswerDisplay";

const handlePress = jest.fn();

describe("AnswerDisplay component", () => {
  it("renders correctly with the passed in text", () => {
    const { getByText } = render(
      <AnswerDisplay
        answerText={"Test answer"}
        handlePress={handlePress}
        answered={false}
      />
    );

    getByText("Test answer");
  });
});
