const downloadJobs = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_JOBS':
      return [
        ...state,
        ...action.array
      ]
    default:
      return state
  }
}

export default downloadJobs
