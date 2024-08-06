import React, { useState } from "react";
import styles from "../static_website/style.module.css";
import axios from "axios";
const AddLnews = () => {
  const [id, setId] = useState("");
  const [lnews, setLnews] = useState("");
  const addLnews = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/lnews", { id, lnews })
      .then((res) => {
        alert("Lnews added succ..");
        setId("");
        setLnews("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
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
                    <button class="btn btn-success" onClick={addLnews}>
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
  );
};

export default AddLnews;
