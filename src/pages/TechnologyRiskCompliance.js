import React from 'react'

function TechnologyRiskCompliance() {
  return (
    <>
      {/* =======================
        Blog detail START */}
      <section className="pt-8 pt-xl-9">
        <div className="container">
          <div className="row g-4 g-lg-6">
            {/* Title and author */}
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="h2 mb-0">Technology Risk & Compliance</h1>
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
              <h4>Comprehensive Risk & Governance for Technology</h4>
              {/* List */}
              <h6>Technology Risk Assessment and Mitigation</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Conduct comprehensive IT risk assessments to identify and
                  mitigate operational and cybersecurity risks.
                </li>
                <li className="mb-2">
                  Provide tailored risk management strategies for banking
                  technology environments.
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
              <h6>Regulatory Compliance and Governance</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Design and implement compliance frameworks with
                  technology-related regulations (e.g., GDPR, PCI DSS).
                </li>
                <li className="mb-2">
                  Support and/or Implement IT governance frameworks like COBIT,
                  ITIL and ISO 27001.
                </li>
              </ul>
              <h6>Cybersecurity and Data Protection</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Develop robust cybersecurity policies and frameworks.
                </li>
                <li className="mb-2">
                  Conduct data privacy assessments and compliance programs.
                </li>
                <li className="mb-2">
                  Create incident response plans and perform simulation
                  exercises.
                </li>
              </ul>
              <h6>Business Continuity and Disaster Recovery</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Design and test business continuity plans (BCP).
                </li>
                <li className="mb-2">
                  Help in talent identification for an enduring capability
                  center/setup.
                </li>
              </ul>
              <h6>IT Infrastructure and Cloud Security</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Assess and secure IT infrastructure, including cloud
                  environments by implementing secure DevOps practices.
                </li>
                <li className="mb-2">
                  Provide guidance & technical consulting on secure cloud
                  migrations and multi-cloud strategies.
                </li>
              </ul>
              <h6>Emerging Technology and Data Governance</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Evaluate risks associated with AI, blockchain, and fintech
                  innovations.
                </li>
                <li className="mb-2">
                  Develop strategies for adopting emerging technologies
                  securely.
                </li>
                <li className="mb-2">
                  Implement data governance frameworks for lineage, accuracy,
                  and regulatory compliance (e.g., BCBS239).
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

export default TechnologyRiskCompliance