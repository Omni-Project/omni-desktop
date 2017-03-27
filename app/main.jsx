'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import store from './store'
import { selectDream, getPublicDreams } from './reducers/dreams'
import { fetchWeekAnalytics, fetchUser } from './reducers/analytics'

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import AddDreamForm from './components/AddDreamForm'
import AllDreams from './components/AllDreams'
import AllSpritesView from './components/AllSpritesView'
import SingleDream from './components/SingleDream'
import AppContainer from './containers/AppContainer'
import DreamsContainer from './containers/DreamsContainer'
import AnalyticsContainer from './containers/AnalyticsContainer'

function onSingleDreamEnter(nextRouterState, replace, done){
  const dreamId = nextRouterState.params.id
  const user = store.getState().auth

  //had to put axios call here so we can use the done function that comes with onEnter hooks. So the hook knows to not mount the component until this entire fn is done running.
  axios.get(`/api/dreams/user/${user.id}/${dreamId}`)
    .then(res => res.data)
    .then(dream => store.dispatch(selectDream(dream)))
    .then(() => done())
    .catch(console.error)
}

function fetchAnalytics(nextRouterState){
  const user = store.getState().auth
  store.dispatch(fetchWeekAnalytics(user.id))
  store.dispatch(fetchUser(user.id))
}

function onPublicDreamsEnter(nextRouterState, replace, done){
  //had to put axios call here so we can use the done function that comes with onEnter hooks.
  axios.get(`/api/dreams/public/`)
    .then(res => res.data)
    .then(dreams => store.dispatch(getPublicDreams(dreams)))
    .then(() => done())
    .catch(console.error)
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path='/mobile' component={AllSpritesView} onEnter={onPublicDreamsEnter} />
    <Route path="/" component={AppContainer} >
      <Route path="public" component={AllSpritesView} onEnter={onPublicDreamsEnter} />
      <IndexRedirect to="/dreams" />
      <Route path="dreams" component={DreamsContainer} >
        <IndexRedirect to="/dreams/all" />
        <Route path="all" component={AllDreams} />
        <Route path="add" component={AddDreamForm} />
        <Route path=":id" component={SingleDream} onEnter={onSingleDreamEnter} />
      </Route>
      <Route path="analytics" component={AnalyticsContainer} onEnter={fetchAnalytics} />


    </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
