import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.demoLogin = this.demoLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  demoLogin() {
    const demoUser = {
      user: {
        username: "Demo",
        password: "123456"
      }
    };
    this.props.login(demoUser).then(() => hashHistory.push("/home"));
  }

  handleLogout() {
    this.props.logout().then(() => hashHistory.push("/"));
  }

  render() {
    const homeLink = this.props.currentUser ? "/home" : '/';
    let userImageUrl, currUserId;
    if (this.props.currentUser) {
      userImageUrl = this.props.currentUser.profile_photo_url ?
        this.props.currentUser.profile_photo_url :
        "http://res.cloudinary.com/dsvfpq1b7/image/upload/v1484767547/cloud_avatar_d2msjo.png";
      currUserId = `/users/${this.props.currentUser.id}`;
    }
    const navElements = () => {
      return this.props.currentUser ? (
        <nav className="login-signup">
          <Link to="/upload" activeClassName="current" className="navbar-button button">Upload</Link>
          <div className="navbar-user-container">
            <Link to={currUserId} className='profile-link'>
              <img className="current-user-thumbnail" src={userImageUrl} />
              <h2 className="navbar-user">Hi, {this.props.currentUser.username}!</h2>
            </Link>
          </div>
          <button className="navbar-button logout" onClick={this.handleLogout}>Log Out</button>
        </nav>
      ) : (
        <nav className="login-signup">
          <button className="demo-button" onClick={this.demoLogin}>Demo Login</button>
          <Link to="/login" activeClassName="current" className="navbar-button button">Login</Link>
          <span className="or-text">&nbsp;or&nbsp;</span>
          <Link to="/signup" activeClassName="current" className="navbar-button button">Sign up!</Link>
        </nav>);
      };

    return (
      <div className="top-bar">
        <header className="header">
          <Link to={homeLink} className="button">
            <div className="home-button">
              <img className="home-logo" src="http://res.cloudinary.com/dsvfpq1b7/image/upload/v1485057712/tunescloud_logo_white_orjmez.png"/>
              <span classname="home-title">TUNESCLOUD</span>
            </div>
          </Link>
          <div className="header-group">
            {navElements()}
          </div>
        </header>
      </div>
    )
  }
}

export default withRouter(NavigationBar);
