import React from 'react'
import SideMenu from './SideMenu'
import renderer from 'react-test-renderer'

describe("SideMenu", () => {
  it('SideMenu renders a Downloads and a Settings menu item', () => {
    const rendered_menu = renderer
      .create(<SideMenu />)
      .toJSON();
    expect(rendered_menu).toMatchSnapshot()
  })
})
