import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "../../ducks/store/configureStore";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

import Goals from "./Goals";

test("Goals should render as expected", () => {
  shallow(<Goals store={store} />);
});
