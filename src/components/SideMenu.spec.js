import React from 'react'
import SideMenu from './SideMenu'
import { MemoryRouter } from 'react-router-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("SideMenu", () => {
  it('renders a Download Sider', () => {
    const side_menu = mount(<MemoryRouter><SideMenu /></MemoryRouter>)
    expect(side_menu.find('Sider').length).toEqual(1)
  })
})
