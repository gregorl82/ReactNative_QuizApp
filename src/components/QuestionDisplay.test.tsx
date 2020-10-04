import React from "react";
import { render } from "react-native-testing-library";
import { QuestionDisplay } from "./QuestionDisplay";

describe("QuestionDisplay component", () => {
  it("displays the passed in text", () => {
    const { getByText } = render(
      <QuestionDisplay questionText={"Test question"} />
    );

    getByText("Test question");
  });
});
