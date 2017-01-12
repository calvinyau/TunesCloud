import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current" className="login-button">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current" className="signup-button">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</div>
);

const NavigationBar = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default NavigationBar;
