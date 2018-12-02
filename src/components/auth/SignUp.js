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
    const { auth, authError, profile } = this.props;
    if (auth.uid && profile.userType) {
      switch (profile.userType) {
        case "manager":
        case "teacher":
          console.log("manager or teacher", profile.userType);
          return <Redirect to="/teacher-dashboard" />;
        case "student":
        case "perent":
          console.log("student or perent", profile.userType);
          return <Redirect to="/student-dashboard" />;
        default:
          console.log("something wronge", profile.userType, profile);

          return <Redirect to="/" />;
      }
    }

    return (
      <div className="container">
        <form onSubmit={this.handlleSubmit} className="white">
          <h5 className="gray-text text-daren-3">Sign Up</h5>
          <div className="input-field">
            <input
              type="email"
              id="email"
              placeholder="email"
              onChange={this.handlleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={this.handlleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              id="firstName"
              placeholder="first name"
              onChange={this.handlleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              id="lastName"
              placeholder="last name"
              onChange={this.handlleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              id="class"
              placeholder="class"
              onChange={this.handlleChange}
            />
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
    authError: state.auth.authError,
    profile: state.firebase.profile
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
