import React, { PureComponent } from "react";

export default class PureComponentEx extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Elearn",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "abcd",
      });
    }, 2000);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Name : {this.state.name}</h1>
      </div>
    );
  }
}
