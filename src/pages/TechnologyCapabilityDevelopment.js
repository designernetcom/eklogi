import React from 'react'

function TechnologyCapabilityDevelopment() {
  return (
    <>
      {/* =======================
        Blog detail START */}
      <section className="pt-8 pt-xl-9">
        <div className="container">
          <div className="row g-4 g-lg-6">
            {/* Title and author */}
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="h2 mb-0">Technology Capability Development</h1>
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
              <h4>Setting Technology Capability Centers for Success</h4>
              {/* List */}
              <h6>Technology Capability Assessment</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Current State Evaluation: Conduct an in-depth evaluation of
                  your current technology capabilities.
                </li>
                <li className="mb-2">
                  Identify Gaps: Identify gaps and areas for improvement to
                  align technology capabilities with business goals.
                </li>
              </ul>
            </div>
            {/* Image */}
            {/* <div className="col-lg-10 mx-auto">
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
            </div> */}
            {/* List content */}
            <div className="col-lg-8 mx-auto">
              <h6>Strategic Capability Roadmap Development</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Define Objectives: Define strategic objectives for technology
                  capability development.
                </li>
                <li className="mb-2">
                  Phased Roadmaps: Develop phased roadmaps to guide the
                  development of technology capabilities over time.
                </li>
              </ul>
              <h6>Setup and Hiring Support</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Legal Entity/Local Regulation: Work with key partners to
                  ensure coverage of the local legal requirements for the
                  capability center
                </li>
                <li className="mb-2">
                  Location Strategy: Assist in defining the right locations for
                  technology capability development, considering factors such as
                  talent availability and market conditions.
                </li>
                <li className="mb-2">
                  Talent Acquisition: Provide support in hiring the right
                  talent, ensuring a mix of skills that align with your
                  strategic technology objectives.
                </li>
              </ul>
              <h6>Transition Support</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Help support the transition to a permanent structure post the
                  capability development phase.
                </li>
                <li className="mb-2">
                  Help in talent identification for an enduring capability
                  center/setup.
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

export default TechnologyCapabilityDevelopment