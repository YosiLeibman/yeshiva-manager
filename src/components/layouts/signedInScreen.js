import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInScreen = props => {
  return (
    <div className="container">
      <div className="box">
        <i className="material-icons">face</i>
        <NavLink to="/create">New Project</NavLink>
      </div>
      <div className="box">
        <i className="material-icons">face</i>
        <a onClick={props.signOut}>Log Out</a>
      </div>
      <div className="box">
        <i className="material-icons">face</i>
        <NavLink to="/">hello {props.profile.userType}</NavLink>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInScreen);
