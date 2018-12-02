import React from "react";
import { Link } from "react-router-dom";
import SingedInLinks from "./SingedInLinks";
import SingedOutLinks from "./SingedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SingedInLinks profile={profile} />
  ) : (
    <SingedOutLinks />
  );
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo logo right">
          Yeshiva Manager
        </Link>
        {links}
      </div>
    </nav>
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
