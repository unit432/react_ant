import globalOption from './globalOption'
import { updateGlobalOption } from '../actions'

describe('globalOption reducer', () => {
  const currentState = { host: '127.0.0.1', port: 80 }
  let action
  it('handle update state', () => {
    action = updateGlobalOption({ host: '8.8.8.8', port: 6800 })
    expect(
      globalOption(currentState, action)
    ).toEqual(
      { host: '8.8.8.8', port: 6800 }
    )
  })

  it('returns default state when action is not defined', () => {
    action = { payload: { host: '8.8.8.8', port: 6800 }, type: 'UPDATE_OPTIOIN' }
    expect(
      globalOption(currentState, action)
    ).toEqual(
      { host: '127.0.0.1', port: 80 }
    )
  })
})
