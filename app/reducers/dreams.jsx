import axios from 'axios'
import store from '../store'
import {browserHistory} from 'react-router'

//CONSTANTS
const GET_DREAMS = 'GET_DREAMS'

//REDUCER
const reducer = (state=[], action) => {
  switch(action.type) {
  case GET_DREAMS:
    return action.dreams
  }
  return state
}
//ACTION CREATORS
export const getDreams = dreams => ({
  type: GET_DREAMS, dreams
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
        console.log('NEW DREAMS',[...dreams, dream])
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


export default reducer
