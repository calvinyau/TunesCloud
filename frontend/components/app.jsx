import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import PlayerContainer from './player/player_container';

const App = ({children}) => (
  <div>
    <NavigationBarContainer />
    <div className="content-area">
      { children }
    </div>
    <PlayerContainer />
  </div>
);

export default App;
