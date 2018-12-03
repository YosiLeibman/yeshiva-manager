import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import StudentList from "../students/StudentList";

class attendaceFor extends Component {
  state = {
    seider: "",
    date: ""
  };

  handlleChoose = e => {
    this.setState({
      seider: e.currentTarget.id,
      date: new Date()
    });
    console.log(this.state);
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
        <h1>choose seider</h1>
        <div className="box" id="chsidess-boker" onClick={this.handlleChoose}>
          <p>chsidess boker</p>
        </div>
        <div className="box" id="nigle-boker" onClick={this.handlleChoose}>
          <p>nigle boker</p>
        </div>
        <div className="box" id="nigle-afternoon" onClick={this.handlleChoose}>
          <p>nigle afternoon</p>
        </div>
        <div className="box" id="chsidess-erev" onClick={this.handlleChoose}>
          <p>chsidess erev</p>
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
