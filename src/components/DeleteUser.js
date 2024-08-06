import axios from "axios";
import React, { Component } from "react";

export default class DeleteUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      id: "",
      name: "",
      address: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteData(uid) {
    axios
      .delete(`http://localhost:4000/users/${uid}`)
      .then((res) => {
        alert("User Deleted Succ..");
      })
      .catch((err) => {
        alert("Unable to delete Data");
      });
  }
  editData(uid) {
    axios
      .get(`http://localhost:4000/users/${uid}`)
      .then((res) => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          address: res.data.address,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  changeUserData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateUser = (e) => {
    const { id, name, address } = this.state;
    e.preventDefault();
    axios
      .put(`http://localhost:4000/users/${id}`, { id, name, address })
      .then((res) => {
        alert("User Updated Succ..");
      })
      .catch((err) => {
        alert("Unable to update user");
      });
  };
  render() {
    const { users, id, name, address } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.updateUser}>
          <div className="row my-4">
            <div className="col-md-3">
              <input
                type="text"
                name="id"
                placeholder="ID"
                className="form-control"
                value={id}
                onChange={this.changeUserData}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={this.changeUserData}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="form-control"
                value={address}
                onChange={this.changeUserData}
              />
            </div>
            <div className="col-md-3">
              <input
                type="submit"
                value="Edit User"
                className="btn btn-success"
              />
            </div>
          </div>
        </form>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteData(user.id)}
                    >
                      Delete
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-info"
                      onClick={() => this.editData(user.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
