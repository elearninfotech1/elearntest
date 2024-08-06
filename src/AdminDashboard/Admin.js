import React, { useState } from "react";
import styles from "../static_website/style.module.css";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (uname === "admin" && pwd === "admin") {
      navigate("/admindashboard");
    } else {
      alert("Invalid Username & Password");
    }
  };
  return (
    <main>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="">Admin Login</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form className={styles.bx_shadow} onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-md-12">
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        placeholder="Username"
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="mb-4">
                      <input
                        type="password"
                        class="form-control"
                        name="pwd"
                        placeholder="Password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="mb-3">
                      <input type="submit" class="btn btn-success" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
