import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutScreen = () => {
  return (
    <div>
      <div className="box">
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <div className="box">
        <NavLink to="/signin">Sing In</NavLink>
      </div>
    </div>
  );
};

export default SignedOutScreen;
