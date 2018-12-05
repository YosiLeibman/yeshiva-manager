// this component get in props one student and mission
// (attendace or grades for example)
// and output div for this student thet include:
// first and last name, and inputs/selects to match the mission.

import React, { Component } from "react";

class AttendacePart extends Component {
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
      studentId: e.target.name,
      studentStatus: e.target.id
    };
    this.props.addStdntToMainList(newStdntAttArr);

    // its work. update the local state
    this.setState({
      studentId: e.target.name,
      studentStatus: e.target.id
    });
  };
  render() {
    return (
      <div className="radio-group">
        <input
          type="radio"
          id="option-one"
          name={this.props.user.id}
          value={this.state.studentStatus}
          onChange={this.updateStatus}
        />
        <label className="label" htmlFor="option-one">
          OnTime
        </label>
        <input
          type="radio"
          id="option-two"
          name={this.props.user.id}
          value={this.state.studentStatus}
          onChange={this.updateStatus}
        />
        <label className="label" htmlFor="option-two">
          Late
        </label>
        <input
          type="radio"
          id="option-three"
          name={this.props.user.id}
          value={this.state.studentStatus}
          onChange={this.updateStatus}
        />
        <label className="label" htmlFor="option-three">
          DidntCame
        </label>
      </div>
    );
  }
}

export default AttendacePart;
