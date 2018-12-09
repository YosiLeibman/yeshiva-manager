import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../layouts/Navbar";
import Dashboard from "../dashboard/Dashboard";
import StudentDashboard from "../dashboard/StudentDashboard";
import TeacherDashboard from "../dashboard/TeacherDashboard";
import ProjectDetails from "../projects/ProjectDetails";
import CreateProject from "../projects/CreateProject";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import AttendaceFor from "../attendace/AttendaceFor";
import GradesFor from "../grades/GradesFor";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route
              exact
              path="/student-dashboard"
              component={StudentDashboard}
            />
            <Route
              exact
              path="/teacher-dashboard"
              component={TeacherDashboard}
            />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/attendace-for" component={AttendaceFor} />
            <Route path="/grades-for" component={GradesFor} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
