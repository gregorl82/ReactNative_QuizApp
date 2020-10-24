import React from "react";
import { ScoreScreen } from "../index";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
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
          score: 5,
          answeredQuestions: [mockAnsweredQuestion1, mockAnsweredQuestion2],
        }}
      />
    );
    await waitFor(() => getByText("5 out of 10!"));
  });

  xit("clicking 'show results' displays the score breakdown modal", async () => {
    const { getByText, queryByText } = render(
      <MockedNavigator
        component={ScoreScreen}
        params={{
          score: 1,
          answeredQuestions: [mockAnsweredQuestion1, mockAnsweredQuestion2],
        }}
      />
    );
    await waitFor(() => getByText("1 out of 10!"));

    fireEvent.press(getByText("SHOW RESULTS"));
    await waitFor(() => getByText("Results"));
    expect(queryByText("1 out of 10!")).toBeNull();
  });

  xit("clicking 'close' closes modal and shows score screen again", async () => {
    const { getByText, queryByText } = render(
      <MockedNavigator
        component={ScoreScreen}
        params={{
          score: 1,
          answeredQuestions: [mockAnsweredQuestion1, mockAnsweredQuestion2],
        }}
      />
    );
    await waitFor(() => getByText("1 out of 10!"));

    fireEvent.press(getByText("SHOW RESULTS"));
    await waitFor(() => getByText("Results"));
    expect(queryByText("1 out of 10!")).toBeNull();

    fireEvent.press(getByText("CLOSE"));
    await waitFor(() => getByText("1 out of 10!"));
    expect(queryByText("Results")).toBeNull();
  });

  xit("if a question was answered correctly, question number and 'CORRECT!' are shown in modal", async () => {
    const { getByText } = render(
      <MockedNavigator
        component={ScoreScreen}
        params={{
          score: 1,
          answeredQuestions: [mockAnsweredQuestion1, mockAnsweredQuestion2],
        }}
      />
    );
    await waitFor(() => getByText("1 out of 10!"));

    fireEvent.press(getByText("SHOW RESULTS"));
    await waitFor(() => getByText("Results"));

    getByText("Question 1 - CORRECT!");
  });

  xit("if a question was anwswered wrong, question number, 'WRONG!', users answer and correct answer are shown in modal", async () => {
    const { getByText } = render(
      <MockedNavigator
        component={ScoreScreen}
        params={{
          score: 1,
          answeredQuestions: [mockAnsweredQuestion1, mockAnsweredQuestion2],
        }}
      />
    );
    await waitFor(() => getByText("1 out of 10!"));

    fireEvent.press(getByText("SHOW RESULTS"));
    await waitFor(() => getByText("Results"));

    getByText("Question 2 - WRONG!");
    getByText(`Your answer: ${mockAnsweredQuestion2.selectedAnswer}`);
    getByText(`Correct answer: ${mockAnsweredQuestion2.correctAnswer}`);
  });
});
