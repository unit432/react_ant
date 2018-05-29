import React from 'react'
import DownloadJob from './DownloadJob'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

function setup() {
  const props = {
    gid: '2089b05ecca3d829',
    fileName: 'debian.iso'
  }

  const enzymeWrapper = mount(<DownloadJob {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Download', () => {

  const { enzymeWrapper } = setup()

  it('renders two Rows', () => {
    expect(enzymeWrapper.find('Row').length).toEqual(3)
  })

  it('renders a row has columns', () => {
    const first_row = enzymeWrapper.find('Row').at(0)
    const cols = first_row.find('Col')
    expect(cols.length).toEqual(2)
    expect(cols.at(0).text()).toEqual('debian.iso')
    expect(cols.at(1).find('ControlButtons').length).toEqual(1)
  })

  it('renders a row has download status', () => {
    const second_row = enzymeWrapper.find('Row').at(1)
    expect(second_row.find('Col').length).toEqual(9)
  })

  it('renders a row has a progress bar', () => {
    const third_row = enzymeWrapper.find('Row').at(2)
    expect(third_row.find('Progress').length).toEqual(1)
  })
})
