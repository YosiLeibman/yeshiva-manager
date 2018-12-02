import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInScreen = props => {
  return (
    <div>
      <div className="box">
        <NavLink to="/create">New Project</NavLink>
      </div>
      <div className="box">
        <a onClick={props.signOut}>Log Out</a>
      </div>
      <div className="box">
        <NavLink to="/">
          <a> hello {props.profile.firstName} </a>
        </NavLink>
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
