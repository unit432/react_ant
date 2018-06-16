import React from 'react'
import TopHead from './TopHead'
import { mount, configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("THead", () => {
  const toggleSideMenu = jest.fn()
  const wrapper = mount(<TopHead hideSideMenu={true} toggleSideMenu={toggleSideMenu}/>)

  it('Renders an icon', () => {
    expect(
      wrapper.find('Icon').length
    ).toEqual(1)
  })

  it('render without crashing', () => {
    expect(
      wrapper.find('TopHead').length
    ).toEqual(1)
  })
})
