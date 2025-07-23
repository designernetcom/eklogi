import React from "react";

const Contact = () => (
  <>
    <section className="pt-7 pb-0 bg-dark" data-bs-theme="dark">
      <div className="container-fluid pt-3 pt-xl-5">
        <div className="row">
          <div className="col-xxl-12 mx-auto">
            <div
              className="card bg-parallax h-200px h-md-300px h-xl-300px overflow-hidden"
              style={{
                paddingTop: "28px",
                paddingBottom: 0,
                backgroundColor: "#1e293b", // bg-dark
                backgroundImage:
                  "url(assets/assets_new/images/banner-6617550_1280.webp)",
                backgroundSize: "cover", // Assuming cover for typical background image behavior
                backgroundPosition: "center", // Centering the background image
                color: "#ffffff", // Assuming dark theme implies light text for contrast
              }}
            >
              {/* background dark overlay */}
              <div className="bg-overlay bg-dark bg-opacity-50" />
              {/* Title */}
              <div className="card-img-overlay d-flex align-items-center justify-content-center text-center z-index-2">
                <h2 style={{ color: "#fff" }}>Contact</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-7 pt-md-8 bg-dark" data-bs-theme="dark">
      {/* SVG decoration */}
      {/* SVG decoration */}
      <div className="container pt-4 pt-md-0">
        <div className="row justify-content-between">
          <div className="col-lg-6 mb-6 mb-lg-0">
            <div className="d-flex flex-column h-100">
              {/* Title */}
              <h1 className="mb-3" style={{ color: "#fff" }}>
                Get in touch{" "}
              </h1>
              <p className="mb-0">
                You can reach us anytime via <a href="#">info@eklogi.com</a>
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
