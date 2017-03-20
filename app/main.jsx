'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import AddDreamForm from './components/AddDreamForm'
import UserDashboard from './components/UserDashboard'
import AppContainer from './components/AppContainer'

import DreamsContainer from './containers/DreamsContainer'
import AddDreamContainer from './containers/AddDreamContainer'



render (
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={AppContainer} >
      <Route path="dreams" component={DreamsContainer}/>
      <Route path="add" component={AddDreamContainer} />

    </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
