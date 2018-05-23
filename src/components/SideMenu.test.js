import React from 'react'
import SideMenu from './SideMenu'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("SideMenu", () => {
  it('SideMenu renders a Downloads and a Settings menu item', () => {
    const rendered_menu = renderer
      .create(<MemoryRouter><SideMenu /></MemoryRouter>)
      .toJSON();
    expect(rendered_menu).toMatchSnapshot()
  })
  
  it('SideMenu renders a Download Button', () => {
    const side_menu = shallow(<SideMenu />)
    expect(side_menu.find('div').text()).toEqual('')
  })
})
