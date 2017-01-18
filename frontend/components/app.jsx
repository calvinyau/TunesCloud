import React from 'react';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';

const App = ({children}) => (
  <div>
    <NavigationBarContainer />
    <div className="body-container">
      { children }
    </div>
  </div>
);

export default App;
