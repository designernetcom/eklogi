import React from "react";

const About = () => (
  <>
    {/* =======================
Main Banner START */}
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
                <h2 style={{ color: "#fff" }}>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Main Banner END */}
    {/* **************** MAIN CONTENT START **************** */}
    {/* =======================
Main Banner START */}
    {/* =======================
Main Banner END */}
    {/* =======================
Main Banner START */}
    {/* =======================
Main Banner END */}
    <section className="pb-0  bg-dark" data-bs-theme="dark">
      {/* SVG decoration */}
      <div className="container">
        {/* Main title */}
        <div className="row mb-3 mb-xl-0">
          <div className="col-xl-9">
            <h4 className="lh-base mb-0">
              Eklogi Technology Consulting &amp; Services LLP
            </h4>
          </div>
        </div>
        {/* About detail START */}
        <div className="row align-items-center">
          {/* Content */}
          <div className="col-lg-7 pe-lg-5">
            <p className="mb-5">
              Welcome to Eklogi, where we specialize in driving large-scale
              technology transformations for a digital-first approach. Elevate
              your business, enhance customer experiences, and harness the power
              of data-driven insights by partnering with us.
            </p>
            {/* Goal and Mission tab START */}
            <div className="card card-body bg-light p-sm-5 h-100">
              {/* SVG decoration */}
              {/* Tabs */}
              <div
                className="nav nav-pills nav-pills-dark"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-mission-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-mission"
                  type="button"
                  role="tab"
                  aria-controls="nav-mission"
                  aria-selected="true"
                >
                  Our Mission
                </button>
                <button
                  className="nav-link"
                  id="nav-goal-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-goal"
                  type="button"
                  role="tab"
                  aria-controls="nav-goal"
                  aria-selected="false"
                >
                  Our Vision
                </button>
              </div>
              {/* Tab content */}
              <div className="tab-content mt-4" id="nav-tabContent">
                {/* Mission content */}
                <div
                  className="tab-pane fade show active"
                  id="nav-mission"
                  role="tabpanel"
                  aria-labelledby="nav-mission-tab"
                  tabIndex={0}
                >
                  {/* <h5 class="mb-3">Our Commitment to Your Success</h5> */}
                  <p className="mb-2">
                    Our mission is to drive business growth and transformation
                    by delivering innovative, data-driven technology solutions.
                    We aim to align technology strategies with organizational
                    goals, enhance customer experiences, and enable sustainable
                    success.
                  </p>
                  {/* List */}
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0">
                      <i className="bi bi-patch-check-fill me-2" />
                      Client-Centric Approach
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <i className="bi bi-patch-check-fill me-2" />
                      Experienced Team
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <i className="bi bi-patch-check-fill me-2" />
                      Measurable Results
                    </li>
                  </ul>
                  {/* Button */}
                  <a className="icon-link icon-link-hover" href="about-us.html">
                    Know about more
                    <i className="bi bi-arrow-right" />{" "}
                  </a>
                </div>
                {/* Goal content */}
                <div
                  className="tab-pane fade"
                  id="nav-goal"
                  role="tabpanel"
                  aria-labelledby="nav-goal-tab"
                  tabIndex={0}
                >
                  {/* <h5 class="mb-3">Charting the Future of Digital Innovation</h5> */}
                  <p className="mb-2">
                    To be a trusted, customer-focused technology partner that
                    empowers businesses to achieve excellence, fosters
                    innovation, and creates a positive impact on customers,
                    employees, and the nation by building a productive and happy
                    ecosystem.
                  </p>
                  {/* List */}
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0">
                      <i className="bi bi-patch-check-fill me-2" />
                      Digital Pioneers
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <i className="bi bi-patch-check-fill me-2" />
                      Continuous Learning
                    </li>
                    <li className="list-group-item heading-color d-flex pb-0">
                      <i className="bi bi-patch-check-fill me-2" />
                      Inspiring Transformation
                    </li>
                  </ul>
                  {/* Button */}
                  <a className="icon-link icon-link-hover" href>
                    Know about more
                    <i className="bi bi-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* Goal and Mission tab END */}
          </div>
          {/* Image */}
          <div className="col-lg-5 mt-7 mt-lg-0">
            <div className="position-relative d-flex justify-content-center">
              {/* Hero image */}
              <img
                src="assets/images/blog/handing-in-notice-1-600x690.png"
                className="rounded"
                alt
              />
            </div>
          </div>
        </div>
        {/* About detail END */}
      </div>
    </section>
    {/* =======================
Team START */}
    <section className="pt-7 bg-dark" data-bs-theme="dark">
      <div className="container">
        <div className="row g-4 g-sm-6">
          {/* Main title */}
          {/* Title and content */}
          <div className="row mb-4 mb-md-6 mt-7">
            <div className="col-md-6 col-lg-5">
              <h2 className="mb-0">Who We Are</h2>
            </div>
            <div className="col-md-6 col-lg-4 ms-auto">
              <p>
                Our team of experts specializes in delivering tailored services
                designed to propel your organization forward in today's
                fast-paced digital landscape.{" "}
              </p>
              {/* Slider arrow */}
              <div className="d-flex gap-3 position-relative mt-3">
                <a
                  href="#"
                  className="btn btn-white border btn-icon rounded-circle mb-0 swiper-button-prev-team"
                >
                  <i className="bi bi-arrow-left" />
                </a>
                <a
                  href="#"
                  className="btn btn-white border btn-icon rounded-circle mb-0 swiper-button-next-team"
                >
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Team item */}
          <div className="col-sm-6 col-md-6 col-xl-6">
            <div className="card card-img-scale bg-transparent overflow-hidden">
              {/* Social links */}
              {/* Social links */}
              <div className="position-absolute top-0 end-0 z-index-2 m-3">
                <ul className="list-inline mb-0 mb-2 mb-sm-0">
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className="btn-icon btn-sm rounded mb-2 bg-linkedin"
                      href="#"
                    >
                      <i className="fab fa-fw fa-linkedin-in" />
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="card-img-scale-wrapper rounded-3">
                {/* Card Image */}
                <img
                  src="assets/images/team/neelabh.jpg"
                  className="img-scale"
                  alt="card image"
                  style={{ height: 250 }}
                />
              </div>
              {/* Card body */}
              <div className="card-body  px-0 pb-0">
                <h6 className="mb-0">
                  <a href="#" className="stretched-link">
                    Neelabh Ranjan
                  </a>
                </h6>
                <small>Director</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-6">
            <div className="card card-img-scale bg-transparent overflow-hidden">
              {/* Tab content */}
              <div className="tab-content mt-4" id="nav-tabContent">
                {/* Mission content */}
                <div
                  className="tab-pane fade show active"
                  id="nav-mission"
                  role="tabpanel"
                  aria-labelledby="nav-mission-tab"
                  tabIndex={0}
                >
                  {/* <h5 class="mb-3">Our Commitment to Your Success</h5> */}
                  <p className="mb-2">
                    Graduate from IIT, Delhi. With 25+ years of experience in
                    product delivery and management for large financial
                    institutions, he held key technology leadership roles at
                    large global financial institutions.
                    <br />
                    His global leadership involved overseeing the implementation
                    of big data, machine learning, and analytics products in
                    large global banks. Neelabh is recognized for his adept
                    leadership in mentoring and developing high-performing teams
                    across diverse cultures.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Team item */}
          <div className="col-sm-6 col-md-6 col-xl-6">
            <div className="card card-img-scale bg-transparent overflow-hidden">
              {/* Tab content */}
              <div className="tab-content mt-4" id="nav-tabContent">
                {/* Mission content */}
                <div
                  className="tab-pane fade show active"
                  id="nav-mission"
                  role="tabpanel"
                  aria-labelledby="nav-mission-tab"
                  tabIndex={0}
                >
                  {/* <h5 class="mb-3">Our Commitment to Your Success</h5> */}
                  <p className="mb-2">
                    An IIT/IIM Alumni with over 20+ years experience in
                    Investment Banking domain having worked across global banks
                    like BNP Paribas, Nomura, Saxo, Danske and Natwest.
                    <br />
                    A gold medalist from IIM Indore, Manish has overseen
                    significant technology transformation initiatives over the
                    course of last two decades across diverse geographies.
                    <br />
                    He has keen interest in macro-economics and capital markets
                    and firm believer in the India growth story.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-6">
            <div className="card card-img-scale bg-transparent overflow-hidden">
              {/* Social links */}
              <div className="position-absolute top-0 end-0 z-index-2 m-3">
                <ul className="list-inline mb-0 mb-2 mb-sm-0">
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className="btn-icon btn-sm rounded mb-2 bg-linkedin"
                      href="#"
                    >
                      <i className="fab fa-fw fa-linkedin-in" />
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="card-img-scale-wrapper rounded-3">
                {/* Card Image */}
                <img
                  src="assets/images/team/manish.jpg"
                  className="img-scale"
                  alt="card image"
                  style={{ height: 250 }}
                />
              </div>
              {/* Card body */}
              <div className="card-body px-0 pb-0">
                <h6 className="mb-0">
                  <a href="#" className="stretched-link">
                    Manish Ahuja
                  </a>
                </h6>
                <small>Director</small>
              </div>
            </div>
          </div>
          {/* Team item */}
          <div className="col-sm-6 col-md-6 col-xl-6">
            <div className="card card-img-scale bg-transparent overflow-hidden">
              {/* Social links */}
              <div className="position-absolute top-0 end-0 z-index-2 m-3">
                <ul className="list-inline mb-0 mb-2 mb-sm-0">
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className="btn-icon btn-sm rounded mb-2 bg-linkedin"
                      href="#"
                    >
                      <i className="fab fa-fw fa-linkedin-in" />
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="card-img-scale-wrapper rounded-3">
                {/* Card Image */}
                <img
                  src="assets/images/team/abhijit.jpg"
                  className="img-scale"
                  alt="card image"
                  style={{ height: 250 }}
                />
              </div>
              {/* Card body */}
              <div className="card-body  px-0 pb-0">
                <h6 className="mb-0">
                  <a href="#" className="stretched-link" />
                  Abhijit Joshi
                </h6>
                <small>Director</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-6">
            <div className="card card-img-scale bg-transparent overflow-hidden">
              {/* Tabs */}
              <div
                className="nav nav-pills nav-pills-dark"
                id="nav-tab"
                role="tablist"
              ></div>
              {/* Tab content */}
              <div className="tab-content mt-4" id="nav-tabContent">
                {/* Mission content */}
                <div
                  className="tab-pane fade show active"
                  id="nav-mission"
                  role="tabpanel"
                  aria-labelledby="nav-mission-tab"
                  tabIndex={0}
                >
                  {/* <h5 class="mb-3">Our Commitment to Your Success</h5> */}
                  <p className="mb-2">
                    Abhijit Joshi, an IIT Mumbai alumnus, has over 25 years of
                    experience in core banking, credit risk, and customer
                    management.
                    <br />
                    At Oracle, he shaped financial products, and at Barclays, he
                    strengthened Global Capability Centers with innovative
                    banking solutions specially in risk domain.
                    <br />
                    Abhijit’s blend of product development expertise and
                    hands-on banking experience positions him as a thought
                    leader in financial technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Team END */}
  </>
);

export default About;
