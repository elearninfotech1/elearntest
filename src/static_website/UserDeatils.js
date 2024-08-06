import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const UserDeatils = () => {
  const [data, setData] = useState("");
  let { uid } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${uid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="">User Details</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-boredered">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td>{data.id}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>{data.body}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserDeatils;
