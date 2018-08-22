import React from "react";
import UriForm from "./UriForm";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("UriForm", () => {
  const wrapper = mount(<UriForm />);
  it("renders a text area", () => {
    expect(
      wrapper
        .find("FormItem")
        .at(0)
        .find("TextArea")
        .at(0)
        .props().rows
    ).toEqual(11);
  });
});
