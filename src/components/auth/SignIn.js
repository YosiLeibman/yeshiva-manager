import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handlleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handlleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth, profile } = this.props;
    // here i can check the user type and redirect to the right place
    if (auth.uid && profile.userType) {
      switch (profile.userType) {
        case "manager":
        case "teacher":
          return <Redirect to="/teacher-dashboard" />;
        case "student":
        case "perent":
          return <Redirect to="/student-dashboard" />;
        default:
          return <Redirect to="/" />;
      }
    }

    return (
      <div className="container">
        <form onSubmit={this.handlleSubmit}>
          <h5 className="gray-text text-daren-3">Sign In</h5>
          <div className="input-field">
            <input
              type="email"
              placeholder="email"
              id="email"
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
            <button className="btn pink lighetn-1 z-depth-0">Log In</button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
