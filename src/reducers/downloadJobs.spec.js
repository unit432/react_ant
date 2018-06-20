import { LOAD_JOBS } from '../actions/actionTypes'
import downloadJobs from './downloadJobs'

describe('downloads reducers', () => {

  const fetchedJobs = {
    type: LOAD_JOBS,
    array: [{ uid: 'b' }, { uid: 'a', downloadSpeed: "1152" }]
  }

  it('should handle empty array', () => {
    expect(
      downloadJobs([], fetchedJobs)
    ).toEqual([
      { uid: 'b' },
      { uid: 'a', downloadSpeed: "1152" }
    ])
  })

  it('should add new elements to existing array', () => {
    const currentJobs = [ { uid: 'u3' }, { uid: 'u4' } ]
    expect(downloadJobs(currentJobs, fetchedJobs)).toEqual([
      { uid: 'u3' },
      { uid: 'u4' },
      { uid: 'b' },
      { uid: 'a', downloadSpeed: "1152" }
    ])
  })

  it('should update existing array with content from new array', () => {
    const currentJobs = [ { uid: 'u3' }, { uid: 'u4' }, { uid: 'a', downloadSpeed: "10" } ]
    expect(downloadJobs(currentJobs, fetchedJobs)).toEqual([
      { uid: 'u3' },
      { uid: 'u4' },
      { uid: 'b' },
      { uid: 'a', downloadSpeed: "1152" }
    ])
  })
})
