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
        username: "Guest",
        password: "123456"
      }
    };
    this.props.login(demoUser).then(() => hashHistory.push("/home"));
  }

  handleLogout() {
    this.props.logout().then(() => hashHistory.push("/"));
  }

  render() {
    const header = () => {
      return this.props.currentUser ? (
      <div className="header-group">
        <Link to="/upload" activeClassName="current" className="navbar-button button">Upload</Link>
        <h2 className="navbar-user">Hi, {this.props.currentUser.username}!</h2>
        <button className="navbar-button" onClick={this.handleLogout}>Log Out</button>
      </div>) :
      (<nav className="login-signup">
        <button className="navbar-button demo-button" onClick={this.demoLogin}>Demo Login</button>
        <Link to="/login" activeClassName="current" className="navbar-button button">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current" className="navbar-button button">Sign up!</Link>
      </nav>);
    };

    return (
      <div>
        <header className="header">
          <Link to="/home" className="home-button button">TUNESCLOUD</Link>
          {header()}
        </header>
      </div>
    )
  }
}

export default withRouter(NavigationBar);
