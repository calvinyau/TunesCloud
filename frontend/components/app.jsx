import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';

const App = ({children}) => (
  <div>
    {/*<h1 className="site-title">TunesCloud</h1>*/}
    {/*<GreetingContainer /> */}
    <NavigationBarContainer />
    { children }
  </div>
);

export default App;
