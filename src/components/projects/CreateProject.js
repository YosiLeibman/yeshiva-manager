import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handlleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handlleSubmit = e => {
    e.preventDefault();
    // console.log(this.state)
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handlleSubmit} className="white">
          <h5 className="gray-text text-daren-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handlleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handlleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighetn-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
