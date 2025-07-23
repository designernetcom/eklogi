import React from "react";

function TechnologyTransformation() {
  return (
    <>
      {/* =======================
        Blog detail START */}
      <section className="pt-8 pt-xl-9">
        <div className="container">
          <div className="row g-4 g-lg-6">
            {/* Title and author */}
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="h2 mb-0">Technology Transformation Excellence</h1>
              {/* Author and actions */}
              <div className="d-sm-flex justify-content-center justify-content-sm-between align-items-center text-start mt-5">
                {/* Avatar */}
                <div className="d-flex justify-content-center align-items-center mb-5 mb-sm-0">
                  {/* Info */}
                  <div className="ms-2">
                    <h6 className="mb-0">
                      <a href="#">Admin</a>
                    </h6>
                  </div>
                </div>
                {/* Action */}
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="text-secondary text-primary-hover"
                      id="cardFeedAction"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-share me-2" />
                      14
                    </a>
                    {/* Card feed action dropdown menu */}
                    <ul
                      className="dropdown-menu min-w-auto"
                      aria-labelledby="cardFeedAction"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          <i class="bi bi-facebook fa-fw me-2" />
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          <i className="bi bi-instagram fa-fw me-2" />
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          <i className="bi bi-whatsapp fa-fw me-2" />
                          Whatsapp
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          <i className="fa-regular fa-paste fa-fw me-2" />
                          Copy link
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="text-secondary opacity-3 mx-3">|</span>
                  <a
                    href="#"
                    className="text-secondary text-primary-hover mb-0"
                  >
                    <i className="bi bi-chat me-2" />5
                  </a>
                  <span className="text-secondary opacity-3 mx-3">|</span>
                  <span className="text-secondary">2 min read</span>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="col-lg-10 mx-auto ">
              <img
                src="assets/assets_new/images/blog/220-SM931536.jpg"
                className="img-fluid "
                alt="blog-img"
              />
            </div>
            {/* Content */}
            <div className="col-lg-8 mx-auto">
              <h4>Digital First Approach</h4>
              {/* List */}
              <h6>Establishing the business case</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Identify key pain points which can be addressed by a
                  technology transformation.
                </li>
                <li className="mb-2">
                  Support the business strategy and growth drivers to ensure
                  that the technology strategy aligns with the overall strategy
                </li>
              </ul>
              <h6>Technological Landscape Assessment</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Conduct a thorough analysis of your current technological
                  infrastructure.{" "}
                </li>
                <li className="mb-2">
                  Identify areas for improvement and optimization.
                </li>
              </ul>
              <h6>Future Centric Architecture and Roadmap</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Design customized roadmaps for digital transformation in
                  keeping with your business aspirations.
                </li>
                <li className="mb-2">
                  Propose key architecture choices to future proof your
                  technology investments.
                </li>
              </ul>
              <h6>Cultural Integration</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Implement strategies to instill a digital-first culture within
                  your organization.
                </li>
                <li className="mb-2">
                  Foster an environment that embraces innovation and change.
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="col-lg-10 mx-auto">
              <div className="row g-4 g-lg-6">
                <div className="col-sm-6">
                  <a
                    href="assets/images/blog/technology-transformation.jpg"
                    data-glightbox
                    data-gallery="image-popup"
                  >
                    <img
                      src="assets/images/blog/technology-transformation.jpg"
                      className="rounded"
                      alt="blog-img"
                    />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="assets/images/blog/technology-transformation.jpg"
                    data-glightbox
                    data-gallery="image-popup"
                  >
                    <img
                      src="assets/images/blog/technology-transformation.jpg"
                      className="rounded"
                      alt="blog-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* List content */}
            <div className="col-lg-8 mx-auto">
              <h6>Step 1: Data Driven Insights</h6>
              <h6>Data Analytics Implementation</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Develop and implement robust data analytics solutions{" "}
                </li>
                <li className="mb-2">
                  Harness the power of data to gain valuable insights into your
                  business operations.
                </li>
              </ul>
              {/* List */}
              <h6>Actionable Insights</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Translate data into actionable insights that drive informed
                  decision-making.{" "}
                </li>
                <li className="mb-2">
                  Empower your team with the knowledge needed to make strategic
                  choices
                </li>
              </ul>
            </div>
            {/* Image */}

            {/* Quote and actions */}
          </div>{" "}
          {/* Row END */}
        </div>
      </section>
    </>
  );
}

export default TechnologyTransformation;
