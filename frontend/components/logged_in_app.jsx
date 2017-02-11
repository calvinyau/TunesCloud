import React from 'react';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import PlayerContainer from './player/player_container';

const LoggedInApp = ({children}) => (
  <div>
    <NavigationBarContainer />
    <div className="content-area clearfix">
      { children }
    </div>
    <PlayerContainer />
  </div>
);

export default LoggedInApp;
