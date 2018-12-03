// this component get in props one student and mission
// (attendace or grades for example)
// and output div for this student thet include:
// first and last name, and inputs/selects to match the mission.

import React from "react";

const AttendacePart = props => {
  return (
    <div className="mission-part">
      <p>here u attach onClick func. the func declare in student list comp.</p>
      <p>{props.msg}</p>
    </div>
  );
};

export default AttendacePart;
