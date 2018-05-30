import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import ControlButtons from './ControlButtons'

describe('ControlButtons', () => {

  const enzymeWrapper = mount(<ControlButtons />)

  it('render without crashing', () => {
    expect(enzymeWrapper.find('ControlButtons').length).toEqual(1)
  })
})
