import React, { Component } from "react";
import styles from "./styles.module.css";
import axios from "axios";
export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      address: "",
    };
  }
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addUser = (e) => {
    e.preventDefault();
    const { id, name, address } = this.state;
    axios
      .post("http://localhost:4000/users", { id, name, address })
      .then((res) => {
        alert("User Added Succ...");
        this.setState({
          id: "",
          name: "",
          address: "",
        });
      })
      .catch((err) => {
        alert("Unable to add User");
      });
  };
  render() {
    const { id, name, address } = this.state;
    return (
      <div className={styles.addstu}>
        <form onSubmit={this.addUser}>
          <div>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={this.changeData}
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.changeData}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address}
              onChange={this.changeData}
            />
          </div>
          <div>
            <input type="submit" value="Add User" />
          </div>
        </form>
      </div>
    );
  }
}
