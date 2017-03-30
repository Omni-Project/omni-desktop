import axios from 'axios'
import {setServerError} from './server'
import { browserHistory } from 'react-router'

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
      .then(() => {
        dispatch(whoami())
        browserHistory.push('/')
      })
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        dispatch(whoami())
        browserHistory.push('/login')
      })
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => response.data)
      .then(res => {
        if(res.flash) dispatch(setServerError(res.flash))
        const user = res.data.user
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export const signup = (name, email, password) =>
  dispatch =>
    axios.post('/api/users',
      {name, email, password})
      .then(() => dispatch(login(email, password)))
      .catch(() => dispatch(whoami()))

export const updateUser = (field, user, newValue, oldValue) =>
  dispatch => {
    //only password update form sends an oldValue
    const route = oldValue? `/api/users/update/${user.id}/password` : `/api/users/update/${user.id}/info`
    const payload = oldValue? {oldPassword: oldValue, newPassword: newValue} : {[field]: newValue}
    axios.post(route, payload)
      .then(res => res.data)
      .then((res) => {
        if(!res.success) return dispatch(setServerError(res.msg))
        dispatch(setServerError("Saved!"))
        dispatch(authenticated(res.user))
      })
      .catch(() => dispatch(authenticated(res.user)))
  }
export default reducer
