import axios from "axios";
import React, { useEffect, useState } from "react";

const EmployeeData = () => {
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users`)
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
          {emp.map((data) => {
            return (
              <tr key={data.id}>
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

export default EmployeeData;
