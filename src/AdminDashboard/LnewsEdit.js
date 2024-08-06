import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../static_website/style.module.css";
import axios from "axios";
const LnewsEdit = () => {
  const [id, setId] = useState("");
  const [lnews, setLnews] = useState("");
  const { lid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/lnews/${lid}`)
      .then((res) => {
        setId(res.data.id);
        setLnews(res.data.lnews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lid]);
  const updateLnews = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/lnews/${lid}`, { id, lnews })
      .then((res) => {
        alert("Lnews Updated Succ..");
        navigate("/admindashboard/editlnews");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="">Edit Lnews</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form className={styles.bx_shadow}>
                <div className="row">
                  <div className="col-md-12">
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control"
                        name="id"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="mb-4">
                      <textarea
                        class="form-control"
                        name="lnews"
                        placeholder="Latest News"
                        value={lnews}
                        onChange={(e) => setLnews(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="mb-3">
                      <button class="btn btn-success" onClick={updateLnews}>
                        Add Lnews
                      </button>
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

export default LnewsEdit;
