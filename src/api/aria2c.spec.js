import { fetchJobs, requestFactory } from './aria2c'

describe('fetchJob', () => {
  describe('requestFactory', () => {
    let jsonreq

    beforeEach(() => {
      jsonreq = { jsonrpc: '2.0', id: 'netant' }
    })

    it('builds tellActive', () => {
      jsonreq.method = 'aria2.tellActive'
      expect(requestFactory('tellActive')).toEqual(jsonreq)
    })

    it('builds addUri', () => {
      jsonreq.method = 'aria2.addUri'
      const params = [['http://example.org/file']]
      jsonreq.params = params
      expect(requestFactory('addUri', params)).toEqual(jsonreq)
    })
  })
})
