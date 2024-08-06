import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const DeleteEmployee = () => {
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteEmp = (eid) => {
    axios
      .delete(`http://localhost:4000/users/${eid}`)
      .then((res) => {
        alert("Employee Delete Succ..");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <button
                    className="btn btn-danger me-3"
                    onClick={() => deleteEmp(data.id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>

                  <NavLink to={`/editEmp/${data.id}`}>
                    <button className="btn btn-info">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                  </NavLink>
                </td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteEmployee;
