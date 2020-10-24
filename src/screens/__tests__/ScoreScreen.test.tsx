import React from "react";
import { ScoreScreen } from "../index";
import { render, waitFor } from "@testing-library/react-native";
import { MockedNavigator } from "../../utils/mockedNavigator";

const mockAnsweredQuestion1 = {
  question: "First question",
  correctAnswer: "First question - correct answer",
  answers: ["First question - correct answer", "First question - wrong answer"],
  answered: true,
  selectedAnswer: "First question - correct answer",
};

const mockAnsweredQuestion2 = {
  question: "Second question",
  correctAnswer: "Second question - correct answer",
  answers: [
    "Second question - correct answer",
    "Second question - wrong answer",
  ],
  answered: true,
  selectedAnswer: "Second question - wrong answer",
};

describe("Score screen", () => {
  it("renders", async () => {
    const { getByText } = render(
      <MockedNavigator
        component={ScoreScreen}
        params={{
          score: 0,
          answeredQuestions: [mockAnsweredQuestion1, mockAnsweredQuestion2],
        }}
      />
    );
    await waitFor(() => getByText("You scored..."));
  });

  it("shows score passed in from params", async () => {
    const { getByText } = render(
      <MockedNavigator
        component={ScoreScreen}
        params={{
          score: 0,
          answeredQuestions: [mockAnsweredQuestion1, mockAnsweredQuestion2],
        }}
      />
    );
    await waitFor(() => getByText("5 out of 10!"));
  });

  xit("clicking 'show results' displays the score breakdown modal", () => {});

  xit("clicking 'close' closes modal and shows score screen again", () => {});

  xit("if a question was answered correctly, question number and 'CORRECT!' are shown in modal", () => {});

  xit("if a question was anwswered wrong, question number, 'WRONG!', users answer and correct answer are shown in modal", () => {});
});
