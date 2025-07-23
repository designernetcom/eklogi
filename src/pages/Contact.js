import React from "react";

const Contact = () => (
  <>
    <section className="pt-7 pt-md-8 bg-dark" data-bs-theme="dark">
      {/* SVG decoration */}
      {/* SVG decoration */}
      <div className="container pt-4 pt-md-0">
        <div className="row justify-content-between">
          <div className="col-lg-6 mb-6 mb-lg-0">
            <div className="d-flex flex-column h-100">
              {/* Title */}
              <h1 className="mb-3">Get in touch </h1>
              <p className="mb-0">
                You can reach us anytime via <a href="#">example@gmail.com</a>
              </p>
              {/* Social button */}
              <div className="d-sm-flex gap-3 align-items-center my-5">
                <h6 className="mb-3 mb-sm-0">Follow us on:</h6>
                <ul className="list-inline flex-wrap mb-0">
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn btn-icon btn-light text-facebook rounded-circle"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn btn-icon btn-light text-instagram rounded-circle"
                    >
                      <i className="bi bi-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn btn-icon btn-light text-dribbble rounded-circle"
                    >
                      <i className="bi bi-dribbble" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn btn-icon btn-light text-twitter rounded-circle"
                    >
                      <i className="bi bi-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn btn-icon btn-light text-youtube rounded-circle"
                    >
                      <i className="bi bi-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="card card-body shadow border p-sm-5">
              <form className="row g-4">
                <div className="col-md-6">
                  <label className="form-label heading-color">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Full name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label heading-color">Email </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="floatingInput"
                    placeholder
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label heading-color">Phone</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label heading-color">Company</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder
                  />
                </div>
                <div className="col-12">
                  <label className="form-label heading-color">Message</label>
                  <textarea
                    className="form-control"
                    placeholder
                    id="floatingTextarea2"
                    style={{ height: 150 }}
                    defaultValue={""}
                  />
                </div>
                {/* Button */}
                <button className="btn btn-lg btn-primary mb-0">
                  Send a message
                </button>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* Row END */}
      </div>
    </section>
  </>
);

export default Contact;
