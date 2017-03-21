'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import {fetchAllDreams} from './reducers/dreams'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import AddDreamForm from './components/AddDreamForm'
import AllDreams from './components/AllDreams'
import UserDashboard from './components/UserDashboard'
import AppContainer from './containers/AppContainer'
import DreamsContainer from './containers/DreamsContainer'

function onDreamsEnter(){
  //load all dreams on enter
  store.dispatch(fetchAllDreams())
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={AppContainer} >
      <IndexRedirect to="/dreams" />
      <Route path="dreams" component={DreamsContainer} >
        <IndexRedirect to="/dreams/all" />
        <Route path="all" component={AllDreams} onEnter={onDreamsEnter} />
        <Route path="add" component={AddDreamForm} />
      </Route>

    </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
