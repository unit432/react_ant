import React from 'react'
import DownloadJob from './DownloadJob'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Download', () =>{
  const job = mount(<DownloadJob />)

  it('renders two Rows', () => {
    expect(job.find('Row').length).toEqual(2)
  })

  it('renders a row has columns', () => {
    expect(job.find('Row').at(0).find('Col').length).toEqual(2)
  })

  it('renders a row has a progress bar', () => {
    expect(job.find('Row').at(1).find('Progress').length).toEqual(1)
  })
})
