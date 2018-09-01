import React from "react";
import TopHead from "./TopHead";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("TopHead", () => {
  const toggleSideMenu = jest.fn();
  const wrapper = shallow(
    <TopHead hideSideMenu={true} toggleSideMenu={toggleSideMenu} />
  );

  it("render toggle side menu item", () => {
    expect(
      wrapper
        .find("span")
        .at(0)
        .find("Icon")
        .props().type
    ).toEqual("menu-fold");
  });

  it("render add download job menu item", () => {
    expect(
      wrapper
        .find("span")
        .at(1)
        .find("Icon")
        .props().type
    ).toEqual("file-add");
  });

  it("Renders pause-circle-o icon", () => {
    expect(
      wrapper
        .find("span")
        .at(2)
        .find("Icon")
        .props().type
    ).toEqual("pause-circle-o");
  });

  it("Renders delete icon", () => {
    expect(
      wrapper
        .find("span")
        .at(3)
        .find("Icon")
        .props().type
    ).toEqual("delete");
  });
});
