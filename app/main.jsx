'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import {fetchAllDreams, fetchSingleDream} from './reducers/dreams'
import { fetchWeekAnalytics, fetchUser } from './reducers/analytics'

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SpriteScene from './components/SpriteScene'
import AddDreamForm from './components/AddDreamForm'
import AllDreams from './components/AllDreams'
import UserDashboard from './components/UserDashboard'
import SingleDream from './components/SingleDream'
import Settings from './components/Settings'
import AppContainer from './containers/AppContainer'
import DreamsContainer from './containers/DreamsContainer'
import AnalyticsContainer from './containers/AnalyticsContainer'
import UserEmail from './components/Settings/UserEmail'

function onSingleDreamEnter(nextRouterState){
  const dreamId = nextRouterState.params.id
  const user=store.getState().auth
  store.dispatch(fetchSingleDream(user.id,dreamId))
}

function fetchAnalytics(nextRouterState){
  const user = store.getState().auth
  store.dispatch(fetchWeekAnalytics(user.id))
  store.dispatch(fetchUser(user.id))
}


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/test" component={SpriteScene} />
    <Route path="/" component={AppContainer} >
      <IndexRedirect to="/dreams" />
      <Route path="dreams" component={DreamsContainer} >
        <IndexRedirect to="/dreams/all" />
        <Route path="all" component={AllDreams} />
        <Route path="add" component={AddDreamForm} />
        <Route path=":id" component={SingleDream} onEnter={onSingleDreamEnter} />
      </Route>
      <Route path="analytics" component={AnalyticsContainer} onEnter={fetchAnalytics} />
      <Route path="/settings" component={Settings} />

    </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
