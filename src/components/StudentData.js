import React, { Component } from "react";
import Axios from "axios";
export default class StudentData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:4000/users")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((stu) => {
              return (
                <tr key={stu.id}>
                  <td>{stu.id}</td>
                  <td>{stu.name}</td>
                  <td>{stu.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
