import downloadJobs from './downloadJobs'

describe('downloads reducers', () => {

  const fetchedJobs = {
    type: 'LOAD_JOBS',
    array: [{ uid: 'b' }, { uid: 'a' }]
  }

  it('should handle empty array', () => {
    expect(
      downloadJobs([], fetchedJobs)
    ).toEqual([
      { uid: 'b' },
      { uid: 'a' }
    ])
  })

  it('should add new elements to existing array', () => {
    const currentJobs = [ { uid: 'u3' }, { uid: 'u4' } ]
    expect(downloadJobs(currentJobs, fetchedJobs)).toEqual([
      { uid: 'u3' },
      { uid: 'u4' },
      { uid: 'b' },
      { uid: 'a' }
    ])
  })
})
