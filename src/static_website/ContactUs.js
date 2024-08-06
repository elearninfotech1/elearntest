import React, { Component } from "react";
import styles from "./style.module.css";
export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
    };
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  validateForm = (e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;
    let alphaExp = /^[a-zA-Z]+$/;
    let numExp = /^[0-9]+$/;
    if (name === "") {
      document.getElementById("nameNote").innerHTML = "please enter name";
    } else {
      if (name.match(alphaExp)) {
        document.getElementById("nameNote").innerHTML = "";
      } else {
        document.getElementById("nameNote").innerHTML =
          "please enter charectors only";
      }
    }
    if (phone === "") {
      document.getElementById("phoneNote").innerHTML = "please enter phoneno";
    } else {
      if (phone.match(numExp)) {
        document.getElementById("phoneNote").innerHTML = "";
      } else {
        document.getElementById("phoneNote").innerHTML =
          "please enter digits only";
      }
    }
    if (email === "") {
      document.getElementById("emailNote").innerHTML = "please enter email";
    } else {
      document.getElementById("emailNote").innerHTML = "";
    }
  };
  render() {
    const { name, phone, email } = this.state;
    return (
      <main>
        <section className={styles.breadcrumb}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="">Contact Us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <form onSubmit={this.validateForm}>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={this.changeName}
                        />
                        <div id="nameNote" className=" mt-2 text-danger"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          value={phone}
                          onChange={this.changePhone}
                        />
                        <div id="phoneNote" className=" mt-2 text-danger"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={this.changeEmail}
                        />
                        <div id="emailNote" className=" mt-2 text-danger"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        placeholder="Message"
                        className="form-control mb-3"
                      ></textarea>
                      <input
                        type="submit"
                        className="btn btn-success"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <h6>Elearn Infotech</h6>
                <p>
                  House No 40, Third Floor, <br />
                  Vittalrao Nagar, Madhapur,
                  <br /> Hitech City Main Road, <br />
                  Hyderabad, Telangana- 081
                </p>
                <p>
                  <span className={styles.font_weight_bold}>Phone:</span>+91
                  81439 56849
                </p>
                <p>
                  <span className={styles.font_weight_bold}>Email: </span>
                  info@hyderabadittrainings.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container-fluid">
            <div className="row my-4">
              <div className="col-md-12 p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3242008306647!2d78.3819167749361!3d17.444190283452674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1720066573735!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Elearn Infotech Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
