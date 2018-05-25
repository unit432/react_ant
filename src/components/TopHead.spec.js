import React from 'react'
import TopHead from './TopHead'
import { mount, configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("THead", () => {
  it('Renders an icon', () => {
    const toggleSideMenu = jest.fn()
    const head_menu = mount(<TopHead show_side_menu={true} toggleSideMenu={toggleSideMenu}/>)
    expect(head_menu.find('Icon').length).toEqual(1)
  })
})
