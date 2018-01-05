import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

import NotFound from "./NotFound";

test("NotFound should render as expected", () => {
  shallow(<NotFound />);
});
