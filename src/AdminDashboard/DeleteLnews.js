import axios from "axios";
import React, { useEffect, useState } from "react";
const DeleteLnews = () => {
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
    <div className="table-responsive">
      <table className="table table-bordered" id="example">
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
                  <button
                    className="btn btn-danger me-3"
                    onClick={() => deleteLnews(data.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
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

export default DeleteLnews;
