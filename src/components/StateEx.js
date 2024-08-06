import React, { Component } from "react";

export default class StateEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Elearn",
      counter: 1,
    };
  }
  changeData = () => {
    this.setState({
      name: "Rajesh",
    });
  };
  changeCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  componentDidMount() {
    document.title = `you clicked ${this.state.counter}`;
  }
  componentDidUpdate() {
    document.title = `you clicked ${this.state.counter}`;
  }
  render() {
    return (
      <div>
        <h1>Name is {this.state.name}</h1>
        <button onClick={this.changeData}>click me</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.changeCounter}>+</button>
      </div>
    );
  }
}
