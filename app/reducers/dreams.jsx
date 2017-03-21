import axios from 'axios'
import store from '../store'

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

export const receiveDreamEntry = (title, content, timeStart, timeEnd, dreamType, isPublic, date) =>
  dispatch => {
    const sleepStartHour = timeStart.getHours()
    const sleepStartMinute = timeStart.getMinutes()
    const sleepEndHour = timeEnd.getHours()
    const sleepEndMinute = timeEnd.getMinutes()

    axios.post('/api/dreams/', {title, content, sleepStartHour, sleepStartMinute, sleepEndHour, sleepEndMinute, dreamType, isPublic, date})
  }



export default reducer
