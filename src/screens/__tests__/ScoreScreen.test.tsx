import React from "react";
import { ScoreScreen } from "../index";
import { render, waitFor } from "@testing-library/react-native";
import { MockedNavigator } from "../../utils/mockedNavigator";

describe("Score screen", () => {
  it("renders", async () => {
    const { getByText } = render(
      <MockedNavigator component={ScoreScreen} params={{ score: 0 }} />
    );
    await waitFor(() => getByText("You scored..."));
  });

  it("shows score passed in from params", async () => {
    const { getByText } = render(
      <MockedNavigator component={ScoreScreen} params={{ score: 5 }} />
    );
    await waitFor(() => getByText("5 out of 10!"));
  });
});
