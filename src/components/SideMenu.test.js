import React from 'react'
import SideMenu from './SideMenu'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

describe("SideMenu", () => {
  it('SideMenu renders a Downloads and a Settings menu item', () => {
    const rendered_menu = renderer
      .create(<MemoryRouter><SideMenu /></MemoryRouter>)
      .toJSON();
    expect(rendered_menu).toMatchSnapshot()
  })
})
