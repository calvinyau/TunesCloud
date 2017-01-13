import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import Modal from 'react-modal';
import { createTrack, fetchTracks, fetchTrack, updateTrack, deleteTrack } from "./util/track_api_util";

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // Modal.setAppElement(document.body);
  window.store = store;
  window.createTrack = createTrack;
  window.fetchTracks = fetchTracks;
  window.fetchTrack = fetchTrack;
  window.updateTrack = updateTrack;
  window.deleteTrack = deleteTrack;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
