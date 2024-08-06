import React, { Component } from "react";

export default class User extends Component {
  componentWillUnmount() {
    alert("this is from cwm");
  }
  render() {
    return (
      <div>
        <h1>Welcome User</h1>
      </div>
    );
  }
}
