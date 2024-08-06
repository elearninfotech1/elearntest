import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
const EditEmployee = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const { eid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${eid}`)
      .then((res) => {
        setId(res.data.id);
        setName(res.data.name);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updateEmp = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/users/${eid}`, { id, name, address })
      .then((res) => {
        alert("User Updated Succ..");
        navigate("/");
      })
      .catch((err) => {
        alert("Unable to update user");
      });
  };
  return (
    <div className={styles.addstu}>
      <form onSubmit={updateEmp}>
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
          <input type="submit" value="Edit Emp" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
