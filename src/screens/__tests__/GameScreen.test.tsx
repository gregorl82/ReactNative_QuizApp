import React from "react";
import { GameScreen } from "../index";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import fetchMock from "jest-fetch-mock";
import { MockedNavigator } from "../../utils/mockedNavigator";

fetchMock.enableMocks();

const mockQuestion1 = {
  question: "First question",
  correct_answer: "First question - correct answer",
  incorrect_answers: [
    "First question - wrong answer 1",
    "First question - wrong answer 2",
    "First question - wrong answer 3",
  ],
};

const mockQuestion2 = {
  question: "Second question",
  correct_answer: "Second question - correct answer",
  incorrect_answers: [
    "Second question - wrong answer 1",
    "Second question - wrong answer 2",
    "Second question - wrong answer 3",
  ],
};

describe("Game screen", () => {
  beforeEach(() => {
    fetchMock.mockClear();

    fetchMock.mockResponseOnce(
      JSON.stringify({ results: [mockQuestion1, mockQuestion2] })
    );
  });

  it("renders", async () => {
    const { getByText } = render(<MockedNavigator component={GameScreen} />);
    await waitFor(() => getByText("Question 1"));
  });

  it("score starts at 0 on render", async () => {
    const { getByText } = render(<MockedNavigator component={GameScreen} />);
    await waitFor(() => getByText("Question 1"));

    getByText("Score: 0");
  });

  it("first question and answers are displayed on render", async () => {
    const { getByText } = render(<MockedNavigator component={GameScreen} />);
    await waitFor(() => getByText("Question 1"));

    getByText(mockQuestion1.question);
    getByText(mockQuestion1.correct_answer);
    getByText(mockQuestion1.incorrect_answers[0]);
    getByText(mockQuestion1.incorrect_answers[1]);
    getByText(mockQuestion1.incorrect_answers[2]);
  });

  it("next question button is hidden when a question is unanswered", async () => {
    const { getByText, getByTestId } = render(
      <MockedNavigator component={GameScreen} />
    );
    await waitFor(() => getByText("Question 1"));

    const button = getByTestId("button");
    expect(button).toHaveStyle({ display: "none" });
  });

  it("pressing the correct answer displays 'correct' message and increments score by 1", async () => {
    const { getByText } = render(<MockedNavigator component={GameScreen} />);
    await waitFor(() => getByText("Question 1"));

    fireEvent.press(getByText(mockQuestion1.correct_answer));
    await waitFor(() => getByText("Score: 1"));

    getByText("Correct!");
  });

  it("pressing an incorrect answers displays 'incorrect' message and does not increment score", async () => {
    const { getByText } = render(<MockedNavigator component={GameScreen} />);
    await waitFor(() => getByText("Question 1"));

    fireEvent.press(getByText(mockQuestion1.incorrect_answers[0]));
    await waitFor(() => getByText("Incorrect!"));

    getByText("Score: 0");
  });

  it("answering a question disables the answer buttons", async () => {
    const { getByText, getAllByTestId } = render(
      <MockedNavigator component={GameScreen} />
    );
    await waitFor(() => getByText("Question 1"));

    fireEvent.press(getByText(mockQuestion1.correct_answer));
    await waitFor(() => getByText("Correct!"));

    const answerButtons = getAllByTestId("answer-display");
    answerButtons.forEach((answer) => expect(answer).toBeDisabled());
  });

  it("answering a question reveals next question button", async () => {
    const { getByText } = render(<MockedNavigator component={GameScreen} />);
    await waitFor(() => getByText("Question 1"));

    fireEvent.press(getByText(mockQuestion1.correct_answer));
    await waitFor(() => getByText("Correct!"));

    getByText("NEXT QUESTION");
  });

  it("answering a question and clicking next question button loads the next question", async () => {
    const { getByText, queryByText } = render(
      <MockedNavigator component={GameScreen} />
    );
    await waitFor(() => getByText("Question 1"));

    fireEvent.press(getByText(mockQuestion1.correct_answer));
    await waitFor(() => getByText("Correct!"));

    fireEvent.press(getByText("NEXT QUESTION"));
    await waitFor(() => getByText("Question 2"));

    getByText(mockQuestion2.question);
    getByText(mockQuestion2.correct_answer);
    getByText(mockQuestion2.incorrect_answers[0]);
    getByText(mockQuestion2.incorrect_answers[1]);
    getByText(mockQuestion2.incorrect_answers[2]);
    expect(queryByText(mockQuestion1.question)).toBeNull();
  });

  it("button text is 'FINISH' on final question", async () => {
    const { getByText, queryByText } = render(
      <MockedNavigator component={GameScreen} />
    );
    await waitFor(() => getByText("Question 1"));

    fireEvent.press(getByText(mockQuestion1.correct_answer));
    await waitFor(() => getByText("Correct!"));

    fireEvent.press(getByText("NEXT QUESTION"));
    await waitFor(() => getByText("Question 2"));

    fireEvent.press(getByText(mockQuestion2.correct_answer));
    await waitFor(() => getByText("Correct!"));

    getByText("FINISH");
    expect(queryByText("NEXT QUESTION")).toBeNull();
  });
});
