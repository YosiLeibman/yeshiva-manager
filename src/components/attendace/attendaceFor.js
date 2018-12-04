import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import StudentList from "../students/StudentList";
import ReactRadioButtonGroup from "react-radio-button-group";

class attendaceFor extends Component {
  state = {
    seider: ""
  };

  handlleChoose = e => {
    this.setState({
      seider: e.currentTarget.id
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
    // hree i can also make radio buttuns insted of
    // all this divs and grids. it will be easeier and nicer.
    return (
      <div className="container">
        <ReactRadioButtonGroup
          options={["One", "Two", "Three"]}
          name="seider"
          isStateful={true}
          value="Two"
          onChange={checkedValue => {
            console.log("New value: ", checkedValue);
          }}
          fireOnMount={true}
          itemClassName="cssForItem"
          inputClassName="cssForInput"
          labelClassName="label"
          groupClassName="radio-group"
        />
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
