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

it("+++ check Prop matches with initialState", () => {
  const container = shallow(<Goals store={store} />);
  expect(container.prop("currentStats")).toEqual([]);
});

it("+++ check Prop matches with initialState", () => {
  const container = shallow(<Goals store={store} />);
  expect(container.prop("goals")).toEqual([]);
});
