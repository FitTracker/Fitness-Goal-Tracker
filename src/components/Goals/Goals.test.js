import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "../../ducks/store/configureStore";

configure({ adapter: new Adapter() });

import Goals from "./Goals";

test("Goals should render as expected", () => {
  shallow(<Goals store={store} />);
});
