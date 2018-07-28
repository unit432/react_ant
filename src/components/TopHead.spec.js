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
        .find("MenuItem")
        .at(0)
        .find("Icon")
        .props().type
    ).toEqual("menu-fold");
  });

  it("render add download job menu item", () => {
    expect(
      wrapper
        .find("MenuItem")
        .at(1)
        .find("Icon")
        .props().type
    ).toEqual("file-add");
  });

  it("Renders pause-circle-o icon", () => {
    expect(
      wrapper
        .find("MenuItem")
        .at(2)
        .find("Icon")
        .props().type
    ).toEqual("pause-circle-o");
  });

  it("Renders delete icon", () => {
    expect(
      wrapper
        .find("MenuItem")
        .at(3)
        .find("Icon")
        .props().type
    ).toEqual("delete");
  });

  it("render a horizontal Menu", () => {
    expect(
      wrapper
        .find("Menu")
        .at(0)
        .props().mode
    ).toEqual("horizontal");
  });
});
