import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup" className="switch-entry">New User? Sign Up Here</Link>;
		} else {
			return <Link to="/login" className="switch-entry">Already a member? Log In Here</Link>;
		}
	}

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
    let form_title = this.props.formType === "login" ? "Log In" : "Sign Up";
		let form_welcome = this.props.formType === "login" ? "Welcome Back!" : "Welcome to TunesCloud!";
		return (
      <div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<h4 className="form-welcome">{form_welcome}</h4>
					<div className="form-title">
						<h3>{form_title}</h3>
					</div>
					{this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" className="login-submit"/>
					</div>
				</form>
      </div>
		);
	}

}

export default withRouter(SessionForm);
