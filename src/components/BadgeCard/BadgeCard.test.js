import React from "react";
import { shallow, configure } from "enzyme";
import { render } from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import store from "../../ducks/store/configureStore";
import { Card, CardHeader } from "material-ui/Card";

configure({ adapter: new Adapter() });

import BadgeCard from "./BadgeCard";

test("BadgeCard should render as expected", () => {
  shallow(<BadgeCard title={"test"} avatar={"avatar"} subtitle={"test"} />);
});

test("+++ render the DUMB component", () => {
  const wrapper = shallow(
    <BadgeCard title={"test"} avatar={"avatar"} subtitle={"test"} />
  );
  expect(wrapper.length).toEqual(1);
});
