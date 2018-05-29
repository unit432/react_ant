import React from 'react'
import DownloadJob from './DownloadJob'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Download', () => {
  const job = mount(<DownloadJob />)

  it('renders two Rows', () => {
    expect(job.find('Row').length).toEqual(3)
  })

  it('renders a row has columns', () => {
    const first_row = job.find('Row').at(0)
    expect(first_row.find('Col').length).toEqual(2)
  })

  it('renders a row has download status', () => {
    const second_row = job.find('Row').at(1)
    expect(second_row.find('Col').length).toEqual(9)
  })

  it('renders a row has a progress bar', () => {
    const third_row = job.find('Row').at(2)
    expect(third_row.find('Progress').length).toEqual(1)
  })
})
