// this component get in props one student and mission
// (attendace or grades for example)
// and output div for this student thet include:
// first and last name, and inputs/selects to match the mission.

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AttendacePart from "./AttendacePart";

const StudentDetails = props => {
  const { user, mission, auth, profile } = props;
  if (auth.uid && profile.userType) {
    switch (profile.userType) {
      case "student":
      case "perent":
        return <Redirect to="/student-dashboard" />;
    }
  }
  let missionDiv;
  if (mission === "attendace") {
    missionDiv = (
      <AttendacePart
        user={user}
        addStdntToMainList={props.addStdntToMainList}
      />
    );
  } else if (mission === "grades") {
    missionDiv = <AttendacePart user={user} />; // need to be changed to graeds part comp.
  } else {
    missionDiv = <AttendacePart user={user} />; // need to be changed to graeds part comp.
  }
  return (
    <div>
      {user.firstName} {user.lastName}
      <div className="mission-div">{missionDiv}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const user = ownProps.user;
  const mission = ownProps.mission;
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(StudentDetails);
