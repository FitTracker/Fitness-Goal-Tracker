import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import StopwatchComponent from "./StopwatchComponent";

test("StopwatchComponent should render as expected", () => {
  shallow(<StopwatchComponent />);
});
