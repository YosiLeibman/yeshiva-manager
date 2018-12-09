// this component get in props one student and mission
// (attendace or grades for example)
// and output div for this student thet include:
// first and last name, and inputs/selects to match the mission.

import React, { Component } from "react";

class GradesPart extends Component {
  constructor() {
    super();
    this.state = {
      studentId: "",
      studentStatus: ""
    };
  }
  // here i try to pass this func prom grand-perent component
  // - from studentList to studentDetailes to attendacePart..

  updateStatus = e => {
    let newStdntAttArr = {
      studentId: this.props.user.id,
      studentGrade: e.target.value
    };
    this.props.addStdntToMainList(newStdntAttArr, "grades");
    console.log(newStdntAttArr);

    // its work. update the local state
    this.setState({
      studentId: this.props.user.id,
      studentGrade: e.target.value
    });
  };

  // i changed according to stackoverflow answer the calling to onChange
  // event to the form tag insted of to each radio.
  // the resulte looks the same. still only first group checks
  // even when i click on 3rd for example.
  render() {
    return (
      <form>
        <input
          type="number"
          id="grade"
          name={this.props.user.id}
          onChange={this.updateStatus}
        />
        <label className="label" htmlFor="OnTime">
          OnTime
        </label>
      </form>
    );
  }
}

export default GradesPart;
