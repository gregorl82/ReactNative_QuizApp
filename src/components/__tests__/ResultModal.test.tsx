import React from "react";
import { ResultModal } from "../ResultModal";
import { render, waitFor } from "@testing-library/react-native";

describe("ResultModal component", () => {
  xit("renders correctly", async () => {
    const { getByText } = render(<ResultModal />);
    await waitFor(() => getByText("Results"));
  });

  xit("displays a correct result", () => {});

  xit("displays an incorrect result", () => {});

  xit("clicking back button calls the onClose function", () => {});
});
