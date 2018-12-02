import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

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

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(attendaceFor);
