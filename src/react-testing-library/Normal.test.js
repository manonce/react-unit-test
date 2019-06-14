import React from "react";
import _ from "lodash";
import { render, fireEvent } from "react-testing-library";
import Normal from "../Normal";

describe("Normal Tests", () => {
  it("should initialize index to 0", async () => {
    const app = render(<Normal />);
    fireEvent.click(app.getByText("Increment Index"));
    const index = await app.findByTestId("normal-index");
    expect(index.textContent).toEqual("1");
  });
});
