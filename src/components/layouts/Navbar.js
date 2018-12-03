import React from "react";
import { Link } from "react-router-dom";
import SignedInScreen from "./SignedInScreen";
import SignedOutScreen from "./SignedOutScreen";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const screen = auth.uid ? (
    <SignedInScreen profile={profile} />
  ) : (
    <SignedOutScreen />
  );
  return (
    <div>
      <div className="logo-wrapper">
        <Link to="/" className="logo">
          Yeshiva Manager
        </Link>
      </div>
      <div>{screen}</div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
