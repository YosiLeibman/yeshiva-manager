import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../layouts/Navbar";
import Dashboard from "../dashboard/Dashboard";
import studentDashboard from "../dashboard/studentDashboard";
import teacherDashboard from "../dashboard/teacherDashboard";
import ProjectDetails from "../projects/ProjectDetails";
import CreateProject from "../projects/CreateProject";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import attendaceFor from "../attendace/attendaceFor";

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
              component={studentDashboard}
            />
            <Route
              exact
              path="/teacher-dashboard"
              component={teacherDashboard}
            />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/attendace-for" component={attendaceFor} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
