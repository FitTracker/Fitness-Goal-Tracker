import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "../../ducks/store/configureStore";

configure({ adapter: new Adapter() });

import FriendCard from "./FriendCard";

test("FriendCard should render as expected", () => {
  shallow(<FriendCard store={store} />);
});
