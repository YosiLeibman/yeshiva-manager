// this component get in props one student and mission
// (attendace or grades for example)
// and output div for this student thet include:
// first and last name, and inputs/selects to match the mission.

import React from "react";

const AttendacePart = props => {
  return (
    <div className="mission-part">
      <p>here u attach onClick func. the func declare in student list comp.</p>
      <div className="radio-group">
        <input type="radio" id="option-one" name={props.user.id} />
        <label className="label" htmlFor="option-one">
          OnTime
        </label>
        <input type="radio" id="option-two" name={props.user.id} />
        <label className="label" htmlFor="option-two">
          Late
        </label>
        <input type="radio" id="option-three" name={props.user.id} />
        <label className="label" htmlFor="option-three">
          DidntCame
        </label>
      </div>
    </div>
  );
};

export default AttendacePart;
