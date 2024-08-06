import React from "react";
import styles from "./style.module.css";
import img1 from "./cu-2.jpg";
const Gallery = () => {
  return (
    <main className={styles.gallery}>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="">Gallery</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
