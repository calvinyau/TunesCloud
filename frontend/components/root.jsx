import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LoggedInApp from './logged_in_app';
import Splash from './splash';
import SessionFormContainer from './session_form/session_form_container';
import TrackIndexContainer from './tracks/tracks_index_container';
import TrackFormContainer from './tracks/track_form_container';
import TrackShowContainer from './tracks/track_show_container';

import { fetchTracks } from '../actions/track_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  const _requestTracks = (nextState, replace) => {
    store.dispatch(fetchTracks());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_redirectIfLoggedIn}>
          <IndexRoute component={Splash} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path="/home" component={LoggedInApp} onEnter={_ensureLoggedIn}>
          <IndexRoute component={TrackIndexContainer} onEnter={_requestTracks} />
          <Route path="/upload" component={TrackFormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/tracks/:id" component={TrackShowContainer} onEnter={_requestTracks} />
          <Route path="/users/:id" component={UserShowContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
