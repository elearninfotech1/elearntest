import React, { Component } from "react";

export default class BasicState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Elearn",
      address: "Hyderabad",
    };
  }
  changeData = () => {
    this.setState({
      name: "rajesh",
    });
  };
  render() {
    return (
      <div>
        <h1>
          State Ex - {this.state.name}, address is {this.state.address}
        </h1>
        <button onClick={this.changeData}>click me</button>
      </div>
    );
  }
}
