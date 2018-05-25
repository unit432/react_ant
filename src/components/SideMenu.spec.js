import React from 'react'
import SideMenu from './SideMenu'
import { MemoryRouter } from 'react-router-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("SideMenu", () => {

  const wrapper = mount(<MemoryRouter><SideMenu /></MemoryRouter>)

  it('renders a Download Sider', () => {
    expect(
      wrapper.find('Sider').length
    ).toEqual(1)
  })

  it('render without crashing', () => {
    expect(
      wrapper.length
    ).toEqual(1)
  })

  it('render a link to settings', () => {
    expect(
      wrapper.find('Link').at(1).prop('to')
    ).toEqual('/settings')
  })

  it('render a link to settings', () => {
    expect(
      wrapper.find('Link').at(0).prop('to')
    ).toEqual('/')
  })
})
