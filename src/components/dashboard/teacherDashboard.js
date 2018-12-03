import React, { Component } from "react";
import Notifications from "./Notifications";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class teacherDashboard extends Component {
  render() {
    const { auth, notifications, profile } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else if (profile.userType) {
      switch (profile.userType) {
        case "student":
        case "perent":
          return <Redirect to="/student-dashboard" />;
        default:
      }
    }

    return (
      <div className="container">
        <h1>teacher dashboard</h1>
        <div className="box">
          <NavLink to="/attendace-for">attendace</NavLink>
        </div>
        <div className="box">
          <NavLink to="/grades-for">grades</NavLink>
        </div>
        <div className="box">
          <h3>search user:</h3>
          <input type="text" placeholder="enter user name" />
        </div>
        <div className="box">
          <Notifications notifications={notifications} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(teacherDashboard);
