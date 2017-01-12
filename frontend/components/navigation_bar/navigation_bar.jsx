import React from 'react';
import { Link, withRouter } from 'react-router';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    const demoUser = {
      user: {
        username: "test",
        password: "123456"
      }
    };
    this.props.login(demoUser);
  }

  render() {
    const header = () => {
      return this.props.currentUser ? (
      <div className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </div>) :
      (<nav className="login-signup">
        <button className="demo-button" onClick={this.demoLogin}>Demo Login</button>
        <Link to="/login" activeClassName="current" className="login-signup-button button">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current" className="login-signup-button button">Sign up!</Link>
      </nav>);
    };

    return (
      <div>
        <header className="header">
          <Link to="/" className="home-button button">TUNESCLOUD</Link>
          {header()}
        </header>
      </div>
    )
  }
}

export default withRouter(NavigationBar);
