import React, { useEffect, useState, useRef } from 'react';
import Isotope from 'isotope-layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const Services = () => {
  const [filterKey, setFilterKey] = useState('*');
  const isotopeRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    isotopeRef.current = new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
    });
    isotopeRef.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
    return () => isotopeRef.current.destroy();
  }, [filterKey]);

  const handleFilterClick = (filter) => {
    setFilterKey(filter);
  };

  return (
    <section className="bg-dark" data-bs-theme="dark">
      <div className="container">
        <div className="inner-container text-center mb-4 mb-sm-6">
          <h2 className="mb-4" style={{ color:"#fff" }}>Our Services</h2>
          <p className="mb-0">
            Our team of experts specializes in delivering tailored services
            designed to propel your organization forward in today's fast-paced
            digital landscape
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-4 col-lg-3">
            <div className="d-flex flex-column h-100">
              <h6 className="mb-sm-3">Our Services</h6>
              <div className="grid-menu mb-4">
                <ul className="nav flex-md-column gap-1 nav-pills nav-pills-primary">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        filterKey === "*" ? "active" : ""
                      }`}
                      onClick={() => handleFilterClick("*")}
                      href="#*"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        filterKey === "marketing" ? "active" : ""
                      }`}
                      onClick={() => handleFilterClick("marketing")}
                      href="#marketing"
                    >
                      Technology Transformation Excellence
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        filterKey === "design" ? "active" : ""
                      }`}
                      onClick={() => handleFilterClick("design")}
                      href="#design"
                    >
                      Unlocking the Power of Data
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        filterKey === "business" ? "active" : ""
                      }`}
                      onClick={() => handleFilterClick("business")}
                      href="#business"
                    >
                      Risk & Finance Technology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        filterKey === "brand" ? "active" : ""
                      }`}
                      onClick={() => handleFilterClick("brand")}
                      href="#brand"
                    >
                      Public Cloud Adoption Expertise
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        filterKey === "ui" ? "active" : ""
                      }`}
                      onClick={() => handleFilterClick("ui")}
                      href="#ui"
                    >
                      Technology Capability Development
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        filterKey === "fr" ? "active" : ""
                      }`}
                      onClick={() => handleFilterClick("fr")}
                      href="#fr"
                    >
                      Fractional Technology Leadership
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9">
            <div className="row g-4 filter-container" ref={gridRef}>
              <div className="col-sm-6 col-lg-4 grid-item marketing offset-lg-2">
                <div className="card card-element-hover card-metro-hover">
                  <img
                    src="/assets/assets_new/images/services/4by3/01.jpg"
                    alt="Technology Transformation"
                  />
                  <div className="card-img-overlay hover-element d-flex">
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a href="#" className="text-white stretched-link">
                          Technology Transformation Excellence
                        </a>
                      </h6>
                      <small className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 grid-item design offset-lg-2">
                <div className="card card-element-hover card-metro-hover">
                  <img
                    src="/assets/assets_new/images/services/4by3/02.jpg"
                    alt="Unlocking the Power of Data"
                  />
                  <div className="card-img-overlay hover-element d-flex">
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a href="#" className="text-white stretched-link">
                          Unlocking the Power of Data
                        </a>
                      </h6>
                      <small className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 grid-item business offset-lg-2">
                <div className="card card-element-hover card-metro-hover">
                  <img
                    src="/assets/assets_new/images/blog/fractional_ct.jpg"
                    alt="Risk & Finance Technology"
                    style={{ height: 230 }}
                  />
                  <div className="card-img-overlay hover-element d-flex">
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a href="#" className="text-white stretched-link">
                          Risk & Finance Technology
                        </a>
                      </h6>
                      <small className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 grid-item brand offset-lg-2">
                <div className="card card-element-hover card-metro-hover">
                  <img
                    src="/assets/assets_new/images/services/4by3/04.jpg"
                    alt="Public Cloud Adoption"
                  />
                  <div className="card-img-overlay hover-element d-flex">
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a href="#" className="text-white stretched-link">
                          Public Cloud Adoption Expertise
                        </a>
                      </h6>
                      <small className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 grid-item ui offset-lg-2">
                <div className="card card-element-hover card-metro-hover">
                  <img
                    src="/assets/assets_new/images/blog/technology-transformation.jpg"
                    alt="Technology Capability Development"
                  />
                  <div className="card-img-overlay hover-element d-flex">
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a href="#" className="text-white stretched-link">
                          Technology Capability Development
                        </a>
                      </h6>
                      <small className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 grid-item fr offset-lg-2">
                <div className="card card-element-hover card-metro-hover">
                  <img
                    src="/assets/assets_new/images/blog/capability-development-slide3.png"
                    alt="Fractional Technology Leadership"
                    style={{ height: 230 }}
                  />
                  <div className="card-img-overlay hover-element d-flex">
                    <div className="card-text mt-auto">
                      <h6 className="mb-0">
                        <a href="#" className="text-white stretched-link">
                          Fractional Technology Leadership
                        </a>
                      </h6>
                      <small className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;