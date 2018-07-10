import { getFileName } from './utils'

describe('getFileName', () => {
  it('returns file name from path', () => {
    const path = '/home/bob/ubuntu-18.04-desktop-amd64.iso'
    expect(
      getFileName(path)
    ).toEqual(
      'ubuntu-18.04-desktop-amd64.iso'
    )
  })

  it('returns meta data from path', () => {
    const path = '[METADATA]4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900'
    expect(
      getFileName(path)
    ).toEqual(
      '4f9d9c3b38eef9893a445b6bcc0b4b3b8da14900'
    )
  })
})
