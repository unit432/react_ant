import React from 'react'
import SideMenu from './SideMenu'
import { MemoryRouter } from 'react-router-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

function setup() {
  const props = {
    sideMenuState: false
  }

  const enzymeWrapper = mount(<MemoryRouter><SideMenu {...props} /></MemoryRouter>)

  return {
    props,
    enzymeWrapper
  }
}

describe("SideMenu", () => {

  const { enzymeWrapper, props } = setup()

  it('renders a Download Sider', () => {
    expect(
      enzymeWrapper.find('Sider').length
    ).toEqual(1)
  })

  it('render without crashing', () => {
    expect(
      enzymeWrapper.length
    ).toEqual(1)
  })

  it('render a link to settings', () => {
    expect(
      enzymeWrapper.find('Link').at(1).prop('to')
    ).toEqual('/settings')
  })

  it('render a link to settings', () => {
    expect(
      enzymeWrapper.find('Link').at(0).prop('to')
    ).toEqual('/')
  })

  it('fold/unfold Sider according to sideMenuState', () => {
    const sider = enzymeWrapper.find('Sider').at(0)
    expect(
      sider.prop('collapsed')
    ).toEqual(false)

    const wrapper = mount(<MemoryRouter><SideMenu sideMenuState={true} /></MemoryRouter>)
    expect(
      wrapper.find('Sider').at(0).prop('collapsed')
    ).toEqual(true)
  })
})
