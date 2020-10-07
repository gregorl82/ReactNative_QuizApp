import React from "react";
import { render } from "@testing-library/react-native";
import { AnswerDisplay } from "./AnswerDisplay";

describe("AnswerDisplay component", () => {
  it("displays the passed in text", () => {
    const { getByText } = render(<AnswerDisplay answerText={"Test answer"} />);

    getByText("Test answer");
  });
});
