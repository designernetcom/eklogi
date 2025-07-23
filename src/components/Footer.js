import React from "react";
import { Link, NavLink } from "react-router-dom";


const Footer = () => (
  <>
    <footer className="pt-6 bg-dark" data-bs-theme="dark">
      <div className="container position-relative mt-sm-5">
        {/* Divider */}
        <hr className="my-5" />
        {/* Footer Widgets */}
        <div className="row g-4 justify-content-between">
          {/* Widget 2 START */}
          <div className="col-lg-3">
            <h6 className="mb-2 mb-md-4" />
            <div className="row g-2 mb-4 mb-sm-5">
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <a href="#">
                  {" "}
                  <img src="assets/assets_new/images/logo/logo.png" alt />{" "}
                </a>
              </div>
            </div>
            {/* Social buttons */}
            <h6 className="mb-2 mb-md-4">Follow on</h6>
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
          {/* Widget 2 END */}
          {/* Widget 1 START */}
          <div className="col-lg-9 col-xl-9">
            <div className="row g-4">
              {/* Link block */}
              <div className="col-4 col-md-2" style={{ textAlign: "left" }}>
                <h6 className="mb-2 mb-md-4">Quick links</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href>
                      Home{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pt-0" href>
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href>
                      Services{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href>
                      Blog{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href>
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-8 col-md-6" style={{ textAlign: "left" }}>
                <h6 className="mb-2 mb-md-4">Our Services</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link pt-0"
                      href="technology-transformation.html"
                    >
                      Technology Transformation Excellence
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="unlocking-the-power-of-data.html"
                    >
                      Unlocking the Power of Data
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="risk-and-finance-technology.html"
                    >
                      Risk &amp; Finance Technology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="public-cloud-adoption-expertise.html"
                    >
                      Public Cloud Adoption Expertise
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="technology-capability-development.html"
                    >
                      Technology Capability Development
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="technology-risk-and-compliance.html"
                    >
                      Technology Risk &amp; Compliance
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="fractional-technology-leadership.html"
                    >
                      Fractional Technology Leadership
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-md-4" style={{ textAlign: "left" }}>
                <h6 className="mb-2 mb-md-4">Contact details</h6>
                <ul className="list-group list-group-borderless">
                  <li className="d-flex mb-3">
                    <i
                      className="bi bi-geo-alt"
                      style={{ fontSize: "1.0rem", color: "#00924a" }}
                    />
                    Office address: <br />
                    Office No. 1002, 10th Floor, Finswell, Viman Nagar, Pune ,
                    Maharashtra , India - 411014.{" "}
                  </li>
                  <li className="d-flex mb-3">
                    <i
                      className="me-2  bi bi-envelope"
                      style={{ fontSize: "1.0rem", color: "#00924a" }}
                    />{" "}
                    info@eklogi.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget 1 END */}
        </div>
        {/* Divider */}
        <hr className="mt-4 mb-3" />
        {/* Bottom footer */}
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-3">
          {/* Copyright link*/}
          <div className="text-body mt-3 mt-md-0">
            {" "}
            Copyrights ©2025 Eklogi consulting. Design by{" "}
            <a href className="text-body text-primary-hover">
              Netcom Business Solutions Pvt Ltd
            </a>
            .{" "}
          </div>
          {/* Copyright link*/}
        </div>
      </div>
    </footer>

    <script src="assets/assets_new/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

    <script src="assets/assets_new/vendor/purecounterjs/dist/purecounter_vanilla.js"></script>
    <script src="assets/assets_new/vendor/ityped/index.js"></script>
    <script src="assets/assets_new/vendor/swiper/swiper-bundle.min.js"></script>

    <script src="assets/assets_new/js/functions.js"></script>
  </>
);

export default Footer;
