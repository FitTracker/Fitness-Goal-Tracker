import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "../../ducks/store/configureStore";

configure({ adapter: new Adapter() });

import Badges from "./Badges";

test("Badge should render as expected", () => {
  shallow(<Badges store={store} />);
});

it("+++ check Prop matches with initialState", () => {
  const container = shallow(<Badges store={store} />);
  expect(container.prop("userBadges")).toEqual([]);
});

it("+++ check Prop matches with initialState", () => {
  const container = shallow(<Badges store={store} />);
  expect(container.prop("goals")).toEqual([]);
});
