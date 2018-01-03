import React from "react";
import Goals from "Goals";
import renderer from "react-test-renderer";

describe("Goals component renders the goals correctly", () => {
  it("renders correctly", () => {
    expect(renderer.create(<Goals />).toJSON()).toMatchSnapshot();
  });
});
