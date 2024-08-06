import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import "datatables.net-dt";
import "jquery";
import $ from "jquery";
import DataTable from "datatables.net-dt";

const UseParamEx = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    $(function () {
      setTimeout(() => {
        new DataTable("#mytable");
        //$("#mytable").DataTable();
      }, 2000);
    });
  });

  return (
    <main>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="">User Data</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-bordered" id="mytable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((stu) => {
                    return (
                      <tr key={stu.id}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td>{stu.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UseParamEx;
