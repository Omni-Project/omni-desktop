import axios from 'axios'
import {fetchAllDreams} from './dreams'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
        if (user) dispatch(fetchAllDreams(user.id))
      })
      .catch(failed => dispatch(authenticated(null)))

export const signup = (name, email, password) =>
  dispatch =>
    axios.post('/api/users',
      {name, email, password})
      .then(() => dispatch(login(email, password)))
      .catch(() => dispatch(whoami()))

export default reducer
