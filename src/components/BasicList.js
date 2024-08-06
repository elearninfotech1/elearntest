import React, { Component } from "react";

export default class BasicList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let names = ["Elearn", "Suresh", "Rajesh", "Mahesh", 10, 20, 30];
    return names.map((a) => {
      return <h1>{a}</h1>;
    });
  }
}
