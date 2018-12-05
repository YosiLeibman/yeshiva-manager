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
  state = {
    attendace: []
  };
  // the indeed fired here when its changet at the
  // attendacePart comp.
  // and the state actualy get the data.
  // now i need fix the multiple radio-goups to see if it added to state
  // when two or more students get signed, or they replace the preveuse.
  addStdntToMainList = newStdntAttArr => {
    this.setState({
      ...this.state,
      attendace: newStdntAttArr
    });
    console.log("fuc was fired!", this.state);
  };
  render() {
    return (
      <div>
        {this.props.users &&
          this.props.users.map(user => {
            return (
              <div className="student" key={user.id}>
                <StudentDetaile
                  user={user}
                  mission={"attendace"}
                  addStdntToMainList={this.addStdntToMainList}
                />
              </div>
            );
          })}
        <p>
          here its still the render func. after all students make here submit
          btn and connect to db directly from here. just pass the state to DB.
          another option is onSubmit pass the state to perent (AttendaceFor
          comp. and there connect to DB because there are alreary has conection
          to firestore
        </p>
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
