import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import banner from "./DESK1-min.jpg";
import img1 from "./cu-2.jpg";
import axios from "axios";
const Home = () => {
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
  return (
    <main>
      <section>
        <div>
          <img src={banner} alt="" className="w-100" />
        </div>
      </section>
      <section className="bg-success">
        <div>
          <marquee>
            {lnews.map((data) => {
              return (
                <span className="me-4 text-white">
                  <i className="fa-regular fa-hand-point-right me-2"></i>
                  {data.lnews}
                </span>
              );
            })}
          </marquee>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center mb-3">
                Welcome to <span className="text-danger">Elearn Infotech</span>
              </h1>
              <p>
                Hyderabad IT Trainings is a Hyderabad based IT Software Training
                & Recruitment Company delivering classroom and online trainings
                in India, USA and UK, Australia, Canada, Singapore. Being the
                leader in Software courses classroom training & online training
                sector, Hyderabad IT Trainings holds the top position in short
                time. Our core values are providing high quality and project
                oriented training at affordable fees. We offer classroom and
                online training on all technologies which are in high demand.
                All our trainers are IT professionals with rich experience.
              </p>

              <p>
                Hyderabad IT Trainings is a Hyderabad based IT Software Training
                & Recruitment Company delivering classroom and online trainings
                in India, USA and UK, Australia, Canada, Singapore. Being the
                leader in Software courses classroom training & online training
                sector, Hyderabad IT Trainings holds the top position in short
                time. Our core values are providing high quality and project
                oriented training at affordable fees. We offer classroom and
                online training on all technologies which are in high demand.
                All our trainers are IT professionals with rich experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.bg_main} py-4`}>
        <div className="container">
          <h1 className="text-center mb-3">
            Our <span className="text-danger">Services</span>
          </h1>
          <div className="row">
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img src={img1} alt="" />
                <h6>Web Designing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
