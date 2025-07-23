import React from 'react'

function PublicCloudAdoptionExpertise() {
  return (
    <>
      {/* =======================
        Blog detail START */}
      <section className="pt-8 pt-xl-9">
        <div className="container">
          <div className="row g-4 g-lg-6">
            {/* Title and author */}
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="h2 mb-0">Public Cloud Adoption Expertise</h1>
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
              <h4>Scalable Public Cloud Integration</h4>
              {/* List */}
              <h6>Cloud Opportunity Assessment</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Strategic Analysis: Conduct an in-depth strategic analysis of
                  your current IT infrastructure and business processes to
                  identify opportunities for scalable public cloud integration.
                </li>
                <li className="mb-2">
                  Optimization Recommendations: Provide recommendations for
                  optimization and enhancement through cloud adoption, ensuring
                  alignment with your business objectives.
                </li>
                <li className="mb-2">
                  Legal/Compliance Requirements: Perform an assessment of the
                  legal and compliance requirements for Public Cloud projects
                  ensuring fully compliant posture for the client.
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
              <h6>Tailored Cloud Migration Roadmaps</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Comprehensive Planning: Develop customized roadmaps for
                  seamless cloud migration, ensuring a phased approach that
                  minimizes disruptions to your operations.
                </li>
                <li className="mb-2">
                  Strategic Alignment: Align migration strategies with your
                  business goals to derive maximum value from cloud resources.
                </li>
              </ul>
              <h6>Scalability Planning</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Flexible Solutions: Identify and plan for scalable solutions
                  within the public cloud environment, ensuring your
                  organization can adapt and scale effortlessly to meet changing
                  demands.
                </li>
                <li className="mb-2">
                  Resource Optimization: Optimize resource allocation to ensure
                  cost-effectiveness and efficient utilization of cloud
                  services.
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

export default PublicCloudAdoptionExpertise