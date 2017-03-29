import axios from 'axios'

const reducer = (state=null, action) => {
  switch(action.type) {
  case SET_AUTH_ERROR:
    return action.error
  }
  return state
}

const SET_AUTH_ERROR = 'SET_AUTH_ERROR'

export const setServerError = error => ({
  type: SET_AUTH_ERROR, error
})

export default reducer
