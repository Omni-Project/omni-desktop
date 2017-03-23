import axios from 'axios'
import store from '../store'
import {browserHistory} from 'react-router'

//CONSTANTS
const GET_WEEK_DREAMS = 'GET_WEEK_DREAMS'

//REDUCER

const initialState = {
  week: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_WEEK_DREAMS:
    newState.week = action.dreams
    return newState
  }
  return state
}
//ACTION CREATORS
export const getWeekDreams = dreams => ({
  type: GET_WEEK_DREAMS, dreams
})



export const fetchWeekAnalytics = (userId) =>
  dispatch => {
    axios.get(`/api/analytics/${userId}`)
    .then(res => res.data)
    .then(dreams => dispatch(getWeekDreams(dreams)))
    .catch(console.error)
  }


export default reducer
