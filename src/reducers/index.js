import { combineReducers } from 'redux'
import frontend from './frontend'
import downloadJobs from './downloadJobs'
import aria2Command from './aria2Command'

export default combineReducers({
  frontend,
  downloadJobs,
  aria2Command
})
