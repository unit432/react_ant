import React from "react";
import JobForm from "./JobForm";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("JobForm", () => {
  const wrapper = shallow(<JobForm />);
  it("renders a uri tab", () => {
    expect(
      wrapper
        .find("Tabs")
        .at(0)
        .find("TabPane")
        .at(0)
        .props().tab
    ).toEqual("URIs");
  });

  it("renders a torrent tab", () => {
    expect(
      wrapper
        .find("Tabs")
        .at(0)
        .find("TabPane")
        .at(1)
        .props().tab
    ).toEqual("Torrents");
  });
});
