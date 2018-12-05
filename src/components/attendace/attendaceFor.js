import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import StudentList from "../students/StudentList";
import ReactRadioButtonGroup from "react-radio-button-group";

class attendaceFor extends Component {
  constructor() {
    super();
    this.state = {
      seider: ""
    };
  }

  updateSeider = e => {
    this.setState({
      seider: e.target.id
    });
  };

  // after output the sdorim - bring here the list of all
  // students from another component
  render() {
    const { auth, profile } = this.props;
    if (auth.uid && profile.userType) {
      switch (profile.userType) {
        case "student":
        case "perent":
          return <Redirect to="/student-dashboard" />;
      }
    }

    return (
      <div className="container">
        <div className="radio-group">
          <input
            type="radio"
            id="chsidess-boker"
            value={this.state.seider}
            onChange={this.updateSeider}
            name="seider"
          />
          <label className="label" htmlFor="chsidess-boker">
            chsidess boker
          </label>
          <input
            type="radio"
            id="nigle-boker"
            value={this.state.seider}
            onChange={this.updateSeider}
            name="seider"
          />
          <label className="label" htmlFor="nigle-boker">
            nigle boker
          </label>
          <input
            type="radio"
            id="nigle-erev"
            value={this.state.seider}
            onChange={this.updateSeider}
            name="seider"
          />
          <label className="label" htmlFor="nigle-erev">
            nigle erev
          </label>
          <input
            type="radio"
            id="chsidess-erev"
            value={this.state.seider}
            onChange={this.updateSeider}
            name="seider"
          />
          <label className="label" htmlFor="chsidess-erev">
            chsidess erev
          </label>
        </div>
        <StudentList mission={"attendace"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(attendaceFor);
