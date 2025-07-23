import React from 'react'

function RiskFinanceTechnology() {
  return (
    <>
      {/* =======================
        Blog detail START */}
      <section className="pt-8 pt-xl-9">
        <div className="container">
          <div className="row g-4 g-lg-6">
            {/* Title and author */}
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="h2 mb-0">Risk & Finance Technology</h1>
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
              <h4>Monitoring & Managing Risk</h4>
              {/* List */}
              <h6>Credit Risk and Finance Models</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Design and implement data frameworks for unified data feed
                  into all the Risk & Finance models (Stress Testing, PD, EAD &
                  LGD)
                </li>
                <li className="mb-2">
                  Identify and implement the right data models/strategy and
                  technology to support risk models.
                </li>
              </ul>
              <h6>Debt Collection Technology</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Assess and recommend the most suitable debt collection
                  platforms, including AI-powered solutions for automated
                  outreach, predictive analytics for customer prioritization,
                  and integrations with existing banking systems.
                </li>
                <li className="mb-2">
                  Enhance customer segmentation through data analytics to tailor
                  collection strategies, improving efficiency and recovery
                  rates.
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
              <h3>Regulatory Reporting & Compliance</h3>
              <h6>Comply with regulations for Risk & Finance Domain</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Design Data Frameworks, dashboards and data lineage across all
                  the Risk & Finance reporting to comply various regulations –
                  <ul>
                    <li>BCBS239</li>
                    <li>BASEL III/ BASEL IV</li>
                    <li>IFRS9</li>
                  </ul>
                </li>
                <li className="mb-2">
                  Stay ahead of regulatory changes to ensure the continued
                  success of your financial services.
                </li>
              </ul>
              {/* List */}
              <h6>Regulatory Reporting and Data feeds for Central Banks</h6>
              <ul className="ps-4 mb-0">
                <li className="mb-2">
                  Desing data model as Single data repository for Regulatory &
                  compliance reporting and data feeds across Risk and Finance in
                  a financial institution.
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

export default RiskFinanceTechnology