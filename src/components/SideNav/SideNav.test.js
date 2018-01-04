import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

import SideNav from "./SideNav";

test("SideNav should render as expected", () => {
  shallow(<SideNav />);
});
