import React, { Component } from "react";

export default class UpdateLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Elearn",
    };
  }
  static getDerivedStateFromProps() {
    console.log("this is from getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("this is from shouldComponentUpdate");
    return true;
  }
  chageData = () => {
    this.setState({
      name: "Rajesh",
    });
  };

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("old state " + preState.name);
    return null;
  }

  componentDidUpdate() {
    console.log("state is " + this.state.name);
  }

  render() {
    console.log("this is from render");
    return (
      <div>
        <h1>Name is {this.state.name}</h1>
        <button onClick={this.chageData}>Click me</button>
      </div>
    );
  }
}
