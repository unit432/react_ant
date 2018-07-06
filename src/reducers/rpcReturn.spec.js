import { LOAD_RPC_RETURN } from '../actions/actionTypes'
import loadRpcReturn from './rpcReturn'

describe ('loadRpcReturn', () => {
  const rpcReturn = {
    "id":"accd6535-de76-42cb-a902-f1d7488f9616",
    "jsonrpc":"2.0",
    "result":
    [
      [[{ uid: 'u3' }, { uid: 'u4' }]],
      [[]],
      [[]],
      [
        {
          "downloadSpeed":"123",
          "numActive":"7",
          "numStopped":"2",
          "numStoppedTotal":"8",
          "numWaiting":"1",
          "uploadSpeed":"30"
        }
      ],
      [
        {
          "always-resume":"true"
        }
      ]
    ]
  }

  const testAction = { type: LOAD_RPC_RETURN, data: rpcReturn }
  let initialState

  beforeEach(() => {
    initialState = {
      globalStats: {
        downloadSpeed: 0,
        numActive: 0,
        numStopped: 0,
        numStoppedTotal: 0,
        numWaiting: 0,
        uploadSpeed: 0
      },
      globalOption: {},
      jobs: []
    }
  })

  it('should handle initial data', () => {
    expect(
      loadRpcReturn(initialState, [])
    ).toEqual(
      initialState
    )
  })

  it('should update globalStats', () => {
    expect(
      loadRpcReturn(initialState, testAction).globalStats
    ).toEqual({
      downloadSpeed: '123',
      numActive: '7',
      numStopped: '2',
      numStoppedTotal: '8',
      numWaiting: '1',
      uploadSpeed: '30'
    })
  })

  it('should update downloadJobs', () => {
    expect(
      loadRpcReturn(initialState, testAction).jobs
    ).toEqual([{ uid: 'u3' }, { uid: 'u4' }])
  })
})
