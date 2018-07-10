import React from 'react'
import DownloadJob from './DownloadJob'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

function setup() {
  const props = {
    gid: '2089b05ecca3d829',
    bittorrent: {
      info: {
        name: 'archlinux.iso'
      }
    },
    status: 'active',
    downloadSpeed: 157457,
    uploadSpeed: 2658,
    totalLength: 7373821579,
    completedLength: 2591637504,
    uploadLength: 36929536
  }

  const enzymeWrapper = mount(<DownloadJob {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('DownloadJobs', () => {

  const { enzymeWrapper } = setup()

  it('renders three Rows', () => {
    expect(enzymeWrapper.find('Row').length).toEqual(3)
  })

  it('renders a row has columns', () => {
    const firstRow = enzymeWrapper.find('Row').at(0)
    const cols = firstRow.find('Col')
    expect(cols.length).toEqual(2)
    expect(cols.at(0).text()).toEqual('archlinux.iso')
    expect(cols.at(1).find('ControlButtons').length).toEqual(1)
  })

  it('renders a row has download status', () => {
    const secondRow = enzymeWrapper.find('Row').at(1)
    const cols = secondRow.find('Col')
    expect(cols.length).toEqual(9)
    expect(cols.at(0).text()).toEqual('active')
    expect(cols.at(1).text()).toEqual('157457')
    expect(cols.at(2).text()).toEqual('2658')
    expect(cols.at(3).text()).toEqual('Time Estimate')
    expect(cols.at(4).text()).toEqual('7373821579')
    expect(cols.at(5).text()).toEqual('2591637504')
    expect(cols.at(6).text()).toEqual('36929536')
    expect(cols.at(7).text()).toEqual('0.01')
    expect(cols.at(8).text()).toBe('35.15%')
  })

  it('renders a row has a progress bar', () => {
    const thirdRow = enzymeWrapper.find('Row').at(2)
    expect(thirdRow.find('Progress').length).toEqual(1)
  })

  describe('renders names properly', () => {
    let props = { }

    it('for Torrent download', () => {
      const bittorrent = { info: { name: 'archlinux.iso'}}
      const enzymeWrapper = mount(<DownloadJob {...{...props, bittorrent: bittorrent } } />)
      const firstRow = enzymeWrapper.find('Row').at(0)
      const cols = firstRow.find('Col')
      expect(cols.at(0).text()).toEqual('archlinux.iso')
    })

    it('for Magnet download', () => {
      const bittorrent = { }
      const files = [{ path: '[METADATA]4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900' }]
      const enzymeWrapper = mount(<DownloadJob {...{...props, bittorrent: bittorrent, files: files } } />)
      const firstRow = enzymeWrapper.find('Row').at(0)
      const cols = firstRow.find('Col')
      expect(cols.at(0).text()).toEqual('4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900')
    })

    it('for URI download', () => {
      const files = [{ path: '/home/bob/CentOS-7-aarch64-Everything-1804.iso' }]
      const enzymeWrapper = mount(<DownloadJob {...{...props, files: files } } />)
      const firstRow = enzymeWrapper.find('Row').at(0)
      const cols = firstRow.find('Col')
      expect(cols.at(0).text()).toEqual('CentOS-7-aarch64-Everything-1804.iso')
    })
  })
})
