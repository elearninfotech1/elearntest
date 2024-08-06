import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const EditLnews = () => {
  const [lnews, setLnews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/lnews")
      .then((res) => {
        setLnews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteLnews = (id) => {
    axios
      .delete(`http://localhost:4000/lnews/${id}`)
      .then((res) => {
        alert("Lnews Delete Succ..");
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
            <th>Lnews</th>
          </tr>
        </thead>
        <tbody>
          {lnews.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <NavLink to={`/lnewsedit/${data.id}`}>
                    <button className="btn btn-info me-3">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                  </NavLink>
                </td>
                <td>{data.id}</td>
                <td>{data.lnews}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EditLnews;
