import React from 'react';
import { Link } from 'react-router';

const Splash = (store) => (
  <div className="splash">
    <div className="tagline">
      <span>cirrusly good music.</span>
    </div>
    <button className="splash-enter"><Link to="/login">Enter the Cloud</Link></button>
  </div>
);

export default Splash;
