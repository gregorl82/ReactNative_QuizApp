import React from "react";
import { render } from "react-native-testing-library";
import { QuestionWithAnswers } from "../screens/GameScreen";
import { Question } from "./Question";

const mockQuestionWithAnswers = {
  question: "Test question",
  correctAnswer: "Test correct answer",
  incorrectAnswers: ["Test wrong answer 1", "Test wrong answer 2"],
} as QuestionWithAnswers;

describe("Question component", () => {
  it("displays question", () => {
    const { getByText } = render(
      <Question question={mockQuestionWithAnswers} />
    );

    getByText(mockQuestionWithAnswers.question);
  });

  it("displays all answers", () => {
    const { getByText } = render(
      <Question question={mockQuestionWithAnswers} />
    );

    getByText(mockQuestionWithAnswers.correctAnswer);
    getByText(mockQuestionWithAnswers.incorrectAnswers[0]);
    getByText(mockQuestionWithAnswers.incorrectAnswers[1]);
  });
});
