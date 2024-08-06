import React, { Component } from "react";
import User from "./User";

export default class UnmountLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  render() {
    let msg;
    if (this.state.show) {
      msg = <User />;
    } else {
      msg = "";
    }
    return msg;
  }
}
