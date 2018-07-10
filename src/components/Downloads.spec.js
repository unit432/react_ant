import React from 'react'
import Downloads from './Downloads'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

const jobs =
  [
    {
      gid: '2089b05ecca3d829',
      fileName: 'debian.iso',
      status: 'active',
      downloadSpeed: '120 KB/s',
      uploadSpeed: '12 KB/s',
      totalLength: '1G',
      completedLength: '50M',
      uploadLength: '12M'
    },
    {
      gid: '3089b05ecca3d829',
      fileName: 'ubuntu.iso',
      status: 'paused',
      downloadSpeed: '120 KB/s',
      uploadSpeed: '12 KB/s',
      totalLength: '1G',
      completedLength: '500M',
      uploadLength: '120M'
    }
  ]

function setup() {
  const props = {
    jobs: jobs
  }

  const enzymeWrapper = mount(<Downloads {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Downloads', () => {
  const { enzymeWrapper } = setup()

  it('render without crashing', () => {
    expect(
      enzymeWrapper.find('Downloads').length
    ).toEqual(1)
  })

  it('render two DownloadJobs', () => {
    expect(
      enzymeWrapper.find('DownloadJob').length
    ).toEqual(2)
  })

  it('render a notice when there no jobs', () => {
    const wrapper = mount(<Downloads jobs={ [] } />)

    expect(
      wrapper.find('.ant-list-empty-text').at(0).text()
    ).toEqual('No Download')
  })
})
