import React from 'react'
import Panel from './Panel'
import { MemoryRouter } from 'react-router-dom'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("Panel", () => {
  it('renders routes', () => {
    const panel = mount(<MemoryRouter><Panel /></MemoryRouter>)
    expect(panel.find('Route').length).toEqual(2)
  })
})
