import React from "react";
import { shallow } from "enzyme";
import StopwatchComponent from "./StopwatchComponent";

test("StopwatchComponent should render as expected", () => {
  const component = shallow(<StopwatchComponent />);
  console.log(component);
});

// test("should start stopwatch on button click", () => {
//   const startStopwatch = jest.fn();
//   expect(startStopwatch).toHaveBeenCalled();
// });
