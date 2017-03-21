import axios from 'axios'
import store from '../store'
import {browserHistory} from 'react-router'

//CONSTANTS
const GET_DREAMS = 'GET_DREAMS'
const GET_SINGLE_DREAM = 'GET_SINGLE_DREAM'

//REDUCER

const initialState={
  dreams: [],
  selectedDream: {}
}
const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state)
  switch(action.type) {
  case GET_DREAMS:
    newState.dreams = action.dreams
    return newState
  case GET_SINGLE_DREAM:
    newState.selectedDream = action.dream
    return newState
  }
  return state
}
//ACTION CREATORS
export const getDreams = dreams => ({
  type: GET_DREAMS, dreams
})

export const selectDream = dream => ({
  type: GET_SINGLE_DREAM, dream
})

export const receiveDreamEntry = (title, content, timeStart, timeEnd, dreamType, isPublic, date) =>
  dispatch => {
    const sleepStartHour = timeStart.getHours()
    const sleepStartMinute = timeStart.getMinutes()
    const sleepEndHour = timeEnd.getHours()
    const sleepEndMinute = timeEnd.getMinutes()
    axios.post('/api/dreams/', {title, content, sleepStartHour, sleepStartMinute, sleepEndHour, sleepEndMinute, dreamType, isPublic, date})
    .then(res => res.data)
    .then(dream => {
        const dreams = store.getState().dreams
        dispatch(getDreams([...dreams, dream]))
        browserHistory.push('/dreams/all')
    }).catch(console.error)
  }

export const fetchAllDreams = () =>
  dispatch => {
    axios.get('/api/dreams/')
    .then(res => res.data)
    .then(dreams => {
      dispatch(getDreams(dreams))
    }).catch(console.error)
  }

export const fetchSingleDream = (id) =>
  dispatch => {
    axios.get(`/api/dreams/${id}`)
    .then(res => res.data)
    .then(dream => {
      dispatch(selectDream(dream))
    }).catch(console.error)
  }

export default reducer
