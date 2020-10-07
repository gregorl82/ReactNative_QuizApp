import React from "react";
import { render } from "@testing-library/react-native";
import { QuestionWithAnswers } from "../screens/GameScreen";
import { Question } from "./Question";

const mockQuestionWithAnswers = {
  question: "Test question",
  correctAnswer: "Test correct answer",
  incorrectAnswers: [
    "Test wrong answer 1",
    "Test wrong answer 2",
    "Test wrong answer 3",
  ],
} as QuestionWithAnswers;

jest.spyOn(Math, "random").mockReturnValue(0.6);

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
    getByText(mockQuestionWithAnswers.incorrectAnswers[2]);
  });

  it.only("correct answer position determined by output of Math.random() function", () => {
    const { getAllByTestId, debug } = render(
      <Question question={mockQuestionWithAnswers} />
    );

    const answers = getAllByTestId("answer-display");

    console.log(answers[0]);
  });
});