'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import store from './store'
import { selectDream, getPublicDreams, fetchAllDreams, getDreams } from './reducers/dreams'
import { getWeekDreams, setUser } from './reducers/analytics'
import { authenticated } from './reducers/auth'
import { setServerError } from './reducers/server'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import AddDreamForm from './components/AddDreamForm'
import AllDreams from './components/AllDreams'
import AllSpritesView from './components/AllSpritesView'
import SingleDream from './components/SingleDream'

import SettingsContainer from './containers/SettingsContainer'
import MobileSprite from './components/MobileSprite'
import AppContainer from './containers/AppContainer'
import DreamsContainer from './containers/DreamsContainer'
import AnalyticsContainer from './containers/AnalyticsContainer'
import EditDreamContainer from './containers/EditDreamContainer'

//MATERIAL UI THEME FOR COMPONENTS
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const muiTheme = getMuiTheme({
   palette: {
    primary1Color: '#a974d5',
    accent1Color: '#a974d5',
    textColor: '#fff',
    canvasColor: 'rgb(48, 48, 48)',
    borderColor: "#bfbfbf",
    disabledColor: '#bfbfbf',
    pickerHeaderColor: '#222',
    clockCircleColor: '#222'
  },
  datePicker: { selectColor: '#a974d5' }
})
//ON ENTER HOOKS
function onAppEnter (nextRouterState, replace, done){
//do not enter app until you get user - making async call here to use the done()
//fixes id errors we were having in other onEnter hooks (user not on state yet, but hook being called with store.getState().auth)
  axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data.user
        console.log(response)
        const authError = response.data.flash
        if (!user) {
          store.dispatch(setServerError(authError))
          store.dispatch(authenticated(null))
          browserHistory.push('/login')
          return done();
        }
        store.dispatch(setServerError(null))
        store.dispatch(authenticated(user))
        if (user) store.dispatch(fetchAllDreams(user.id))
      })
      .then(() => done())
      .catch(failed => {
        store.dispatch(setServerError(failed.data.flash))
        store.dispatch(authenticated(null))
        browserHistory.push('/login')
      })
      .then(() => done())
}

function onLoginEnter(nextRouterState, replace, done) {
  axios.get('/api/auth/whoami')
    .then(response => response.data.user)
    .then(user => {
      if (user) {
        browserHistory.push('/')
      }
    })
    .then(() => done())
}

function onDreamsEnter(nextRouterState){
  const user = store.getState().auth
  store.dispatch(fetchAllDreams(user.id))
}

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


function fetchAnalytics(nextRouterState, replace, done){

  const user = store.getState().auth;
  const getWeek = axios.get(`/api/analytics/${user.id}`).then(res => res.data)
  const getUser = axios.get(`/api/users/${user.id}`).then(res => res.data)

  Promise.all([getWeek, getUser])
      .then(([week, user]) => {
        store.dispatch(getWeekDreams(week))
        store.dispatch(setUser(user))
      })
      .then(() => done())
      .catch(console.error)
}

function onPublicDreamsEnter(nextRouterState, replace, done){
  //had to put axios call here so we can use the done function that comes with onEnter hooks.
  axios.get(`/api/dreams/public/`)
    .then(res => res.data)
    .then(dreams => store.dispatch(getPublicDreams(dreams)))
    .then(() => done())
    .catch(console.error)
}


//REACTDOM.RENDER
function onMobileVREnter(nextRouterState, replace, done){
  const dreamId = nextRouterState.params.dreamId
  const userId = nextRouterState.params.userId
  const token = nextRouterState.params.token
  //had to put axios call here so we can use the done function that comes with onEnter hooks. So the hook knows to not mount the component until this entire fn is done running.
  axios.get(`/api/dreams/user/${userId}/${dreamId}?token=${token}`)
    .then(res => res.data)
    .then(dream => store.dispatch(selectDream(dream)))
    .then(() => done())
    .catch(console.error)
}




render (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} onEnter={onAppEnter}>
        <IndexRedirect to="/analytics" />
        <Route path="analytics" component={AnalyticsContainer} onEnter={fetchAnalytics} />
        <Route path="public" component={AllSpritesView} onEnter={onPublicDreamsEnter} />
        <Route path="dreams" component={DreamsContainer} onEnter={onDreamsEnter}>
          <IndexRedirect to="/dreams/all" />
          <Route path="all" component={AllDreams} />
          <Route path="add" component={AddDreamForm} />
          <Route path="edit" component={EditDreamContainer} />
          <Route path=":id" component={SingleDream} onEnter={onSingleDreamEnter} />
        </Route>
        <Route path="/settings" component={SettingsContainer} />
      </Route>
    <Route path="/mobile-vr/:userId/:dreamId/:token" component={MobileSprite} onEnter={onMobileVREnter}/>
    <Route path="/login" component={Login} onEnter={onLoginEnter} />
    </Router>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
