import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutScreen = () => {
  return (
    <div className="container">
      <div className="box">
        <i className="material-icons">person_add</i>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <div className="box">
        <i className="material-icons">fingerprint</i>
        <NavLink to="/signin">Sing In</NavLink>
      </div>
    </div>
  );
};

export default SignedOutScreen;
