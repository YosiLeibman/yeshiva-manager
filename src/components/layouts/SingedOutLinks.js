import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="left">
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sing In</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
