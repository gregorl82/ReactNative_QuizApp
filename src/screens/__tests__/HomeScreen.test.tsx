import React from "react";
import { HomeScreen } from "../HomeScreen";
import { render, waitFor } from "@testing-library/react-native";
import { MockedNavigator } from "../../utils/mockedNavigator";

describe("Home screen", () => {
  it("renders", async () => {
    const { getByText } = render(<MockedNavigator component={HomeScreen} />);
    await waitFor(() => getByText("Qwizzr!"));
  });
});
