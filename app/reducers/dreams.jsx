import axios from 'axios'
import store from '../store'
import {browserHistory} from 'react-router'

//CONSTANTS
const GET_DREAMS = 'GET_DREAMS'
const GET_SINGLE_DREAM = 'GET_SINGLE_DREAM'
const RECEIVE_DREAM = 'RECEIVE_DREAM'
const GET_PUBLIC_DREAMS = 'GET_PUBLIC_DREAMS'

//REDUCER
const initialState = {
  list: [],
  selectedDream: {},
  publicDreams: []
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_DREAMS:
    newState.list = action.dreams
    return newState
  case GET_SINGLE_DREAM:
    newState.selectedDream = action.dream
    return newState
  case RECEIVE_DREAM:
    newState.list = [...newState.list, action.dream]
    return newState
  case GET_PUBLIC_DREAMS:
    newState.publicDreams = action.publicDreams
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

export const receiveDream = dream => ({
  type: RECEIVE_DREAM, dream
})

export const getPublicDreams = publicDreams => ({
  type: GET_PUBLIC_DREAMS, publicDreams
})

export const receiveDreamEntry = (title, content, timeStart, timeEnd, dreamType, isPublic, date, userId) =>
  dispatch => {
    const sleepStartHour = timeStart.getHours()
    const sleepStartMinute = timeStart.getMinutes()
    const sleepEndHour = timeEnd.getHours()
    const sleepEndMinute = timeEnd.getMinutes()

    axios.post(`/api/dreams/user/${userId}`, {title, content, sleepStartHour, sleepStartMinute, sleepEndHour, sleepEndMinute, dreamType, isPublic, date})
        .then(res => res.data)
        .then(dream => dispatch(receiveDream(dream)))
        .then(() => browserHistory.push('/dreams/all'))
        .catch(console.error)
  }

export const fetchAllDreams = (userId) =>
  dispatch => {
    axios.get(`/api/dreams/user/${userId}`)
    .then(res => res.data)
    .then(dreams => {
      dispatch(getDreams(dreams))
    }).catch(console.error)
  }

export const fetchSingleDream = (userId, id) =>
  dispatch => {
    axios.get(`/api/dreams/user/${userId}/${id}`)
    .then(res => res.data)
    .then(dream => {
      dispatch(selectDream(dream))
    }).catch(console.error)
  }

export default reducer
