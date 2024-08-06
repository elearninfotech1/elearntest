import React, { Component } from "react";

export default class ConditionalEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: 13,
    };
  }
  render() {
    let msg;
    switch (this.state.choice) {
      case 1:
        msg = <h1>This is Case1</h1>;
        break;
      case 2:
        msg = <h1>This is Case2</h1>;
        break;
      case 3:
        msg = <h1>This is Case3</h1>;
        break;
      case 4:
        msg = <h1>This is Case4</h1>;
        break;
      default:
        msg = <h1>Invalid Choice</h1>;
    }
    return msg;
  }
}
