import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
const AddEmployee = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  let addEmployee = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/users`, { id, name, address })
      .then((res) => {
        alert("Emp Added Succ...");
        setId("");
        setName("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to add Emp");
      });
  };
  return (
    <div className={styles.addstu}>
      <form onSubmit={addEmployee}>
        <div>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Add Emp" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
