import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import StudentList from "../students/StudentList";

class GradesFor extends Component {
  constructor() {
    super();
    this.state = {
      examName: ""
    };
  }

  updateExamName = e => {
    this.setState({
      examName: e.target.id
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
        <input
          type="test"
          id="exam-name"
          value={this.state.seider}
          onChange={this.updateExamName}
          placeholder="enter exam name"
        />
        <StudentList mission={"grades"} />
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

export default connect(mapStateToProps)(GradesFor);
