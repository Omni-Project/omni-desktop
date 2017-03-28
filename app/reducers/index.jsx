import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  dreams:  require('./dreams').default,
  analytics:  require('./analytics').default,
  server: require('./server').default
})

export default rootReducer
