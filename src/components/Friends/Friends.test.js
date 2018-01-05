import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "../../ducks/store/configureStore";

configure({ adapter: new Adapter() });

import Friends from "./Friends";

test("Friends should render as expected", () => {
  shallow(<Friends store={store} />);
});

it("+++ check Prop matches with initialState", () => {
  const container = shallow(<Friends store={store} />);
  expect(container.prop("friendsGoals")).toEqual([]);
});

it("+++ check Prop matches with initialState", () => {
  const container = shallow(<Friends store={store} />);
  expect(container.prop("searchResults")).toEqual([]);
});
