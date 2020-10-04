import React from "react";
import { render } from "react-native-testing-library";
import { AnswerDisplay } from "./AnswerDisplay";

describe("AnswerDisplay component", () => {
  it("displays the passed in text", () => {
    const { getByText } = render(<AnswerDisplay answerText={"Test answer"} />);

    getByText("Test answer");
  });
});
