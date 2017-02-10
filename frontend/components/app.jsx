import React from 'react';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';

const App = ({children}) => (
  <div className="react-root">
    <NavigationBarContainer />
    <div className="body-container">
      { children }
    </div>
  </div>
);

export default App;
