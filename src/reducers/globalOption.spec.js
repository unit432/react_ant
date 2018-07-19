import globalOption from './globalOption'
import { updateGlobalOption } from '../actions'

describe('globalOption reducer', () => {
  it('hanle update state', () => {
    const currentState = { host: '127.0.0.0', port: 80 }
    const action = updateGlobalOption({ host: '8.8.8.8', port: 6800 })
    expect(
      globalOption(currentState, action)
    ).toEqual(
      { host: '8.8.8.8', port: 6800 }
    )
  })
})
