import React from "react";
import Panel from "./Panel";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Panel", () => {
  it("renders routes", () => {
    const mockStore = configureStore([]);
    const wrapper = mount(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <Panel />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find("Route").length).toEqual(2);
  });
});
