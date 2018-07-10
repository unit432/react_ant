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

  it('renders a row has download status', () => {
    const secondRow = enzymeWrapper.find('.ant-list-item').at(0)
    const tags = secondRow.find('Tag')
    expect(tags.length).toEqual(9)
    expect(tags.at(0).text()).toEqual('active')
    expect(tags.at(1).text()).toEqual('157457')
    expect(tags.at(2).text()).toEqual('2658')
    expect(tags.at(3).text()).toEqual('Time Estimate')
    expect(tags.at(4).text()).toEqual('7373821579')
    expect(tags.at(5).text()).toEqual('2591637504')
    expect(tags.at(6).text()).toEqual('36929536')
    expect(tags.at(7).text()).toEqual('0.01')
    expect(tags.at(8).text()).toBe('35.15%')
  })

  it('renders a row has a progress bar', () => {
    const listItem = enzymeWrapper.find('.ant-list-item').at(0)
    expect(listItem.find('Progress').length).toEqual(1)
  })

  describe('renders names properly', () => {
    let props = { }

    it('for Torrent download', () => {
      const bittorrent = { info: { name: 'archlinux.iso'}}
      const enzymeWrapper = mount(<DownloadJob {...{...props, bittorrent: bittorrent } } />)
      const listItem = enzymeWrapper.find('.ant-list-item').at(0)
      const fileName = listItem.find('.ant-list-item-meta-title')
      expect(fileName.text()).toEqual('archlinux.iso')
    })

    it('for Magnet download', () => {
      const bittorrent = { }
      const files = [{ path: '[METADATA]4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900' }]
      const enzymeWrapper = mount(<DownloadJob {...{...props, bittorrent: bittorrent, files: files } } />)
      const listItem = enzymeWrapper.find('.ant-list-item').at(0)
      const fileName = listItem.find('.ant-list-item-meta-title')
      expect(fileName.text()).toEqual('4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900')
    })

    it('for URI download', () => {
      const files = [{ path: '/home/bob/CentOS-7-aarch64-Everything-1804.iso' }]
      const enzymeWrapper = mount(<DownloadJob {...{...props, files: files } } />)
      const listItem = enzymeWrapper.find('.ant-list-item').at(0)
      const fileName = listItem.find('.ant-list-item-meta-title')
      expect(fileName.text()).toEqual('CentOS-7-aarch64-Everything-1804.iso')
    })
  })
})
