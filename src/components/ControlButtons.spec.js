import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import ControlButtons from "./ControlButtons";

function setup() {
  const props = {
    jobStatus: "active"
  };

  const enzymeWrapper = mount(<ControlButtons {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("ControlButtons", () => {
  const { enzymeWrapper } = setup();

  it("render without crashing", () => {
    expect(enzymeWrapper.find("ControlButtons").length).toEqual(1);
  });

  it("render three control icons", () => {
    const icons = enzymeWrapper.find("Icon");

    expect(icons.length).toEqual(3);

    expect(icons.at(0).prop("type")).toEqual("pause-circle-o");

    expect(icons.at(1).prop("type")).toEqual("delete");

    expect(icons.at(2).prop("type")).toEqual("setting");
  });

  it("render pause-circle-o icon when job is not active", () => {
    const wrapper = mount(<ControlButtons jobStatus={"paused"} />);
    expect(
      wrapper
        .find("Icon")
        .at(0)
        .prop("type")
    ).toEqual("play-circle-o");
  });
});
