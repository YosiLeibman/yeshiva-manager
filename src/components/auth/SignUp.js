import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    class: "",
    userType: ""
  };
  handlleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };
  handlleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
    console.log(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handlleSubmit} className="white">
          <h5 className="gray-text text-daren-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handlleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handlleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handlleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handlleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="class">class</label>
            <input type="text" id="class" onChange={this.handlleChange} />
          </div>
          <div className="input-field col s12">
            <select
              id="userType"
              value={this.state.userType}
              className="browser-default"
              onChange={this.handlleChange}
            >
              <option value="" disabled>
                Choose your option
              </option>
              <option value="manager">manager</option>
              <option value="teacher">teacher</option>
              <option value="student">student</option>
              <option value="perent">perent</option>
            </select>
            <label>user type</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighetn-1 z-depth-0">Sign Up</button>
          </div>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
