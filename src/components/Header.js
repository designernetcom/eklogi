import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className="header-sticky header-absolute" data-bs-theme="dark">
        {/* Logo Nav START */}
        <nav className="navbar navbar-expand-xl px-lg-5">
          <div className="container">
            {/* Logo START */}
            <NavLink className="navbar-brand me-5" to="/">
              <img
                className="light-mode-item navbar-brand-item"
                src="assets/images/logo/logo1.png"
                alt="logo"
                style={{ height: 60 }}
              />
              <img
                className="dark-mode-item navbar-brand-item"
                src="assets/images/logo/logo.png"
                alt="logo"
                style={{ height: 60 }}
              />
            </NavLink>
            {/* Logo END 

			 Main navbar START */}
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
                {/* Nav item */}
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                {/* Nav item */}
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
                {/* Nav item */}
                <li className="nav-item dropdown dropdown-fullwidth">
                  <p
                    className="nav-link dropdown-toggle"
                   
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Our Services
                  </p>
                  <div
                    className="dropdown-menu py-0"
                    style={{ width: "900px" }}
                  >
                    <div className="row p-2 p-sm-4">
                      {/* Dropdown column item */}
                      {/* <div class="col-md-6 col-xl-3">
									<ul class="list-unstyled">
										<li class="dropdown-header h6 mb-2">Useful links</li>
										<li> <a class="dropdown-item" href="#">Market research</a> </li>
										<li> <a class="dropdown-item" href="#">Advertising</a> </li>
										<li> <a class="dropdown-item" href="#">Consumer behavior</a> </li>
										<li> <a class="dropdown-item" href="#">Digital marketing</a> </li>
										<li> <a class="dropdown-item" href="#">Marketing ethics</a> </li>
										<li> <a class="dropdown-item" href="#">Social media marketing</a> </li>
									</ul>
								</div> */}
                      {/* Dropdown column item */}
                      <div className="col-md-6 col-xl-4 col-xxl-5 h-100">
                        <span className="dropdown-header h6 mb-2">
                          Our Service
                        </span>
                        {/* Dropdown item */}
                        <div className="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                          <div className="d-flex me-3">
                            {/* Icon */}
                            <div className="icon-md border bg-body rounded flex-shrink-0">
                              <i className="bi-file-earmark-text heading-color fs-6" />
                            </div>
                            {/* Content */}
                            <div className="mx-2">
                              <NavLink
                                className="stretched-link heading-color fw-bold mb-0"
                                to="technology-transformation"
                              >
                                Technology Transformation Excellence
                              </NavLink>
                            </div>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                          <div className="d-flex me-3">
                            {/* Icon */}
                            <div className="icon-md border bg-body rounded flex-shrink-0">
                              <i className="bi bi-stickies heading-color fs-6" />
                            </div>
                            {/* Content */}
                            <div className="mx-2">
                              <NavLink
                                className="stretched-link heading-color fw-bold mb-0"
                                to="unlocking-the-power-of-data"
                              >
                                Unlocking the Power of Data
                              </NavLink>
                            </div>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                          <div className="d-flex me-3">
                            {/* Icon */}
                            <div className="icon-md border bg-body rounded flex-shrink-0">
                              <i className="bi bi-bullseye heading-color fs-6" />
                            </div>
                            {/* Content */}
                            <div className="mx-2">
                              <NavLink
                                className="stretched-link heading-color fw-bold mb-0"
                                to="risk-and-finance-technology"
                              >
                                Risk &amp; Finance Technology
                              </NavLink>
                            </div>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                          <div className="d-flex me-3">
                            {/* Icon */}
                            <div className="icon-md border bg-body rounded flex-shrink-0">
                              <i className="bi bi-mask heading-color fs-6" />
                            </div>
                            {/* Content */}
                            <div className="mx-2">
                              <NavLink
                                className="stretched-link heading-color fw-bold mb-0"
                                to="public-cloud-adoption-expertise"
                              >
                                Public Cloud Adoption Expertise
                              </NavLink>
                            </div>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                          <div className="d-flex me-3">
                            {/* Icon */}
                            <div className="icon-md border bg-body rounded flex-shrink-0">
                              <i className="bi bi-mask heading-color fs-6" />
                            </div>
                            {/* Content */}
                            <div className="mx-2">
                              <NavLink
                                className="stretched-link heading-color fw-bold mb-0"
                                to="technology-capability-development"
                              >
                                Technology Capability Development
                              </NavLink>
                            </div>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                          <div className="d-flex me-3">
                            {/* Icon */}
                            <div className="icon-md border bg-body rounded flex-shrink-0">
                              <i className="bi bi-mask heading-color fs-6" />
                            </div>
                            {/* Content */}
                            <div className="mx-2">
                              <NavLink
                                className="stretched-link heading-color fw-bold mb-0"
                                to="technology-risk-and-compliance"
                              >
                                Technology Risk & Compliance
                              </NavLink>
                            </div>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
                          <div className="d-flex me-3">
                            {/* Icon */}
                            <div className="icon-md border bg-body rounded flex-shrink-0">
                              <i className="bi bi-mask heading-color fs-6" />
                            </div>
                            {/* Content */}
                            <div className="mx-2">
                              <NavLink
                                className="stretched-link heading-color fw-bold mb-0"
                                to="fractional-technology-leadership"
                              >
                                Fractional Technology Leadership
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Feature resources card */}
                      <div className="col-lg-4">
                        <span className="dropdown-header h6 mb-2">Service</span>
                        {/* Feature card */}
                        <div className="card bg-transparent px-3">
                          {/* Image */}
                          <img
                            src="assets/images/blog/fractional ct.jpg"
                            className="rounded mb-3"
                            alt="feature-img"
                          />
                          <div className="card-body p-0">
                            <p className="mb-2">
                              Welcome to Eklogi, where we specialize in driving
                              large-scale technology transformations for a
                              digital-first approach.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Nav item */}
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    to="/blog"
                    activeClassName="active"
                  >
                    Blog
                  </NavLink>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Main navbar END */}
            {/* Buttons */}
            <ul className="nav align-items-center dropdown-hover ms-sm-2">
              {/* Dark mode option START */}
              <li className="nav-item dropdown dropdown-animation">
                <button
                  className="btn btn-link mb-0 px-2 lh-1"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    className="bi bi-circle-half theme-icon-active fill-mode fa-fw"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    <use href="#" />
                  </svg>
                </button>
                <ul
                  className="dropdown-menu min-w-auto dropdown-menu-end"
                  aria-labelledby="bd-theme"
                >
                  <li className="mb-1">
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="light"
                    >
                      <svg
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        <use href="#" />
                      </svg>
                      Light
                    </button>
                  </li>
                  <li className="mb-1">
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        <use href="#" />
                      </svg>
                      Dark
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center active"
                      data-bs-theme-value="auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-circle-half fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                        <use href="#" />
                      </svg>
                      Auto
                    </button>
                  </li>
                </ul>
              </li>
              {/* Dark mode option END */}
              {/* Search */}
              <li className="nav nav-item dropdown nav-search px-1 px-lg-3">
                <a
                  className="btn btn-light border btn-round mb-0"
                  role="button"
                  href="#"
                  id="navSearch"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                >
                  <i className="bi bi-search"> </i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end shadow rounded p-2"
                  aria-labelledby="navSearch"
                  data-bs-popper="none"
                >
                  <form className="input-group">
                    <input
                      className="form-control border-primary"
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <button className="btn btn-primary m-0" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </li>
              {/* Offcanvas cart menu */}
              {/* Responsive navbar toggler */}
              <li className="nav-item">
                <button
                  className="navbar-toggler ms-3 p-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-animation">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* Logo Nav END */}
      </header>
    </>
  );
};

export default Header;
