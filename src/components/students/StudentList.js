// component with state that get all students
// from DB and map them.
// for each student will be component
// thet get the student and the mission
// and output the student's name and mpre filed be the specific mission

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import StudentDetaile from "./StudentDetails";

class StudentList extends Component {
  some = () => {
    console.log(this.props.users);
  };
  render() {
    return (
      <div>
        {this.props.users &&
          this.props.users.map(user => {
            return (
              <StudentDetaile user={user} mission={"attendace"} key={user.id} />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users" }])
)(StudentList);
