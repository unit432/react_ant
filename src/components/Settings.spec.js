import React from 'react'
import Settings from './Settings'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

function setup() {
  const props = {
    aira2Options: {
      host: '127.0.0.1',
      port: 6800
    }
  }

  const enzymeWrapper = mount(<Settings {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Settings', () => {
  const { enzymeWrapper } = setup()

  it('redner without crashing', () => {
    expect(
      enzymeWrapper.find('Settings').length
    ).toEqual(1)
  })
})
