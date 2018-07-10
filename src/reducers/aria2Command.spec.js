import { BUILD_ARIA2_CMD, CLEAN_ARIA2_CMD } from '../actions/actionTypes'
import aria2Command from './aria2Command'

describe('aria2Command reducer', () => {
  let currentState

  beforeEach(() => {
    currentState = [
      [
        {"methodName":"aria2.tellActive"},
        {"methodName":"aria2.tellWaiting","params":[0,1000]},
        {"methodName":"aria2.tellStopped","params":[0,1000]},
        {"methodName":"aria2.getGlobalStat"},
        {"methodName":"aria2.getGlobalOption"},
        {"methodName":'aria2.addTorrent', "params":['/user/seed.torrent'], "once": true}
      ]
    ]
  })

  it('insert new command', () => {
    const addUri = {
      type: BUILD_ARIA2_CMD,
      cmd: {'methodName':'aria2.addUri', 'params':[['http://example.org/file']]}
    }

    const newState = [currentState[0].concat(addUri.cmd)]

    expect(
      aria2Command(currentState, addUri)
    ).toEqual(newState)
  })

  it('replace existing command', () => {
    const updateTellStopped = {
      type: BUILD_ARIA2_CMD,
      cmd: {'methodName':'aria2.tellStopped', 'params':[0,99]}
    }

    const newState = [
      [
        {"methodName":"aria2.tellActive"},
        {"methodName":"aria2.tellWaiting","params":[0,1000]},
        {"methodName":"aria2.tellStopped","params":[0,99]},
        {"methodName":"aria2.getGlobalStat"},
        {"methodName":"aria2.getGlobalOption"}
      ]
    ]

    expect(
      aria2Command(currentState, updateTellStopped)
    ).toEqual(newState)
  })

  it('handle clean aira2c command', () => {
    const cleanAira2Command = { type: CLEAN_ARIA2_CMD }

    const newState = [
      [
        {"methodName":"aria2.tellActive"},
        {"methodName":"aria2.tellWaiting","params":[0,1000]},
        {"methodName":"aria2.tellStopped","params":[0,1000]},
        {"methodName":"aria2.getGlobalStat"},
        {"methodName":"aria2.getGlobalOption"}
      ]
    ]

    expect(
      aria2Command(currentState, cleanAira2Command)
    ).toEqual(newState)
  })
})
