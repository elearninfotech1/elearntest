import React, { Component } from "react";

export default class LifeCycleEx extends Component {
  constructor() {
    super();
    this.state = {
      name: "Elearn",
    };
    console.log("this is from const");
  }
  static getDerivedStateFromProps() {
    console.log("this is from getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("this is from componentDidMount");
  }
  render() {
    console.log("this is from render");
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
