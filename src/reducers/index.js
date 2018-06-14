import { combineReducers } from 'redux'
import frontend from './frontend'
import downloadJobs from './downloadJobs'

export default combineReducers({
  frontend,
  downloadJobs
})
