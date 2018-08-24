import React from "react";
import UriForm from "./UriForm";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
configure({ adapter: new Adapter() });

describe("UriForm", () => {
  const wrapper = mount(
    <MemoryRouter>
      <UriForm />
    </MemoryRouter>
  );
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
