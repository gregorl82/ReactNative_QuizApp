import React from "react";
import { render } from "@testing-library/react-native";
import { QuestionWithAnswers } from "../screens/GameScreen";
import { Question } from "./Question";

const mockQuestionWithAnswers = {
  question: "Test question",
  correctAnswer: "Test correct answer",
  answers: [
    "Test correct answer",
    "Test wrong answer 1",
    "Test wrong answer 2",
    "Test wrong answer 3",
  ],
} as QuestionWithAnswers;

const handlePress = jest.fn();

describe("Question component", () => {
  it("displays question", () => {
    const { getByText } = render(
      <Question question={mockQuestionWithAnswers} handlePress={handlePress} />
    );

    getByText(mockQuestionWithAnswers.question);
  });

  it("displays all answers", () => {
    const { getByText } = render(
      <Question question={mockQuestionWithAnswers} handlePress={handlePress} />
    );

    getByText(mockQuestionWithAnswers.answers[0]);
    getByText(mockQuestionWithAnswers.answers[1]);
    getByText(mockQuestionWithAnswers.answers[2]);
    getByText(mockQuestionWithAnswers.answers[3]);
  });

  it("renders answers in order", () => {
    const { getAllByTestId } = render(
      <Question question={mockQuestionWithAnswers} handlePress={handlePress} />
    );

    const renderedAnswers = getAllByTestId("answer-display");

    const actualAnswerOrder = renderedAnswers.map((answer) => {
      return answer.props.children;
    });

    const expectedAnswerOrder = [
      mockQuestionWithAnswers.answers[0],
      mockQuestionWithAnswers.answers[1],
      mockQuestionWithAnswers.answers[2],
      mockQuestionWithAnswers.answers[3],
    ];

    expect(expectedAnswerOrder).toStrictEqual(actualAnswerOrder);
  });
});
