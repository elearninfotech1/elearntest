import React, { Component } from "react";
import Admin from "../AdminDashboard/Admin";

const HOC = (Comp) => {
  return class NewComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        login: false,
      };
    }
    render() {
      return this.state.login ? <Comp /> : <Admin />;
    }
  };
};

export default HOC;
