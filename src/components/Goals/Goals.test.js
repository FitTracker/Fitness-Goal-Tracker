import React from "react";
import Goals from "Goals";
import renderer from "react-test-renderer";

describe("Goals component renders goals correctly", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<Goals />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
