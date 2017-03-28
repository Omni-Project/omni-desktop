import axios from 'axios'
import store from '../store'
import {browserHistory} from 'react-router'

//CONSTANTS
const GET_DREAMS = 'GET_DREAMS'
const GET_SINGLE_DREAM = 'GET_SINGLE_DREAM'
const RECEIVE_DREAM = 'RECEIVE_DREAM'
const GET_PUBLIC_DREAMS = 'GET_PUBLIC_DREAMS'
const UPDATE_DREAMS = 'UPDATE_DREAMS'
const UPDATE_DREAM = 'UPDATE_DREAM'

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
  case UPDATE_DREAMS:
    newState.list = state.list.filter(dream => {
      return dream.id !== action.deletedDreamId
    })
    return newState
  case UPDATE_DREAM:
    newState.list = state.list.map(dream => {
      if(dream.id === action.updatedDream.id) return action.updatedDream
      return dream
    })
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

export const updateDream = updatedDream => ({
  type: UPDATE_DREAM, updatedDream
})

export const updateDreamsList = deletedDreamId => ({
  type: UPDATE_DREAMS, deletedDreamId
})

export const getPublicDreams = publicDreams => ({
  type: UPDATE_DREAMS, publicDreams
})

export const receiveDreamEntry = (title, content, timeStart, timeEnd, dreamType, isPublic, date, userId, dreamId) =>
  dispatch => {
    const sleepStartHour = timeStart.getHours()
    const sleepStartMinute = timeStart.getMinutes()
    const sleepEndHour = timeEnd.getHours()
    const sleepEndMinute = timeEnd.getMinutes()
    //UPDATE AND CREATE NEW DREAM BOTH USE SAME ROUTE
    axios.post(`/api/dreams/user/${userId}`, {title, content, sleepStartHour, sleepStartMinute, sleepEndHour, sleepEndMinute, dreamType, isPublic, date, dreamId})
        .then(res => res.data)
        .then(dream => {
          if(dreamId) return dispatch(updateDream(dream))
          return dispatch(receiveDream(dream))
        })
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

export const deleteDream = (dreamId, userId) =>
  dispatch => {
    axios.delete(`/api/dreams/user/${userId}/${dreamId}`)
    .then(res => res.data)
    .then(() => {
      dispatch(updateDreamsList(dreamId))
      browserHistory.push('/dreams/all')
    }).catch(console.error)
  }

export const updateDreamAsync = (dream, userId) =>
  dispatch => {

    axios.put(`/api/dreams/user/${userId}/${dreamId}`, dream)
    .then(res => res.data)
    .then(updatedDream => {
      dispatch(updateDream(updateDream))
      browserHistory.push('/dreams/all')
    }).catch(console.error)
  }


export default reducer
