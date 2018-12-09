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
    this.props.addStdntToMainList(newStdntAttArr, "attendace");
    console.log(e.target.name, e.target.id);

    // its work. update the local state
    this.setState({
      studentId: e.target.name,
      studentStatus: e.target.id
    });
    console.log(this.state);
  };

  render() {
    return (
      <form className="radio-group" onChange={this.updateStatus}>
        <input
          type="radio"
          id="OnTime"
          name={this.props.user.id}
          value="onTime"
        />
        <label className="label" htmlFor="OnTime">
          OnTime
        </label>
        <input type="radio" id="Late" name={this.props.user.id} value="Late" />
        <label className="label" htmlFor="Late">
          Late
        </label>
        <input
          type="radio"
          id="DidntCame"
          name={this.props.user.id}
          value="DidntCame"
          defaultChecked={true}
        />
        <label className="label" htmlFor="DidntCame">
          DidntCame
        </label>
      </form>
    );
  }
}

export default AttendacePart;
