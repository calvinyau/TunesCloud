import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import Modal from 'react-modal';

import { updateTrack } from './actions/track_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  // window.scrollTo(0, 0);
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // Modal.setAppElement(document.body);
  window.store = store;
  window.updateTrack = updateTrack;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
