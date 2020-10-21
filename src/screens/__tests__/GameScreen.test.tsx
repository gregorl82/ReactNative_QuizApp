import React from "react";
import { GameScreen } from "../index";
import { render, waitFor } from "@testing-library/react-native";
import fetchMock from "jest-fetch-mock";
import { MockedNavigator } from "./mockedNavigator";

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
  });

  it("renders", async () => {
    fetchMock.mockResponse(
      JSON.stringify({ results: [mockQuestion1, mockQuestion2] })
    );

    const { getByText } = render(<MockedNavigator component={GameScreen} />);

    await waitFor(() => getByText("Question 1"));
  });
});
