import React from 'react'
import TopHead from './TopHead'
import { mount, configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("THead", () => {
  const toggleSideMenu = jest.fn()
  const wrapper = mount(<TopHead hideSideMenu={true} toggleSideMenu={toggleSideMenu}/>)

  it('Renders menu-fold icon', () => {
    expect(
      wrapper.find('Icon').at(0).props().type
    ).toEqual('menu-fold')
  })

  it('Renders file-add icon', () => {
    expect(
      wrapper.find('Icon').at(1).props().type
    ).toEqual('file-add')
  })

  it('Renders pause-circle-o icon', () => {
    expect(
      wrapper.find('Icon').at(2).props().type
    ).toEqual('pause-circle-o')
  })

  it('Renders delete icon', () => {
    expect(
      wrapper.find('Icon').at(3).props().type
    ).toEqual('delete')
  })

  it('render without crashing', () => {
    expect(
      wrapper.find('TopHead').length
    ).toEqual(1)
  })
})
