import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => (
  <>
    {/* =======================
Main Banner START */}
    <section className="pt-7 pb-0 bg-dark" data-bs-theme="dark">
      <div className="container-fluid pt-3 pt-xl-5">
        <div className="row">
          <div className="col-xxl-12 mx-auto">
            <div className="card bg-parallax h-200px h-md-300px h-xl-300px overflow-hidden">
              {/* background dark overlay */}
              <div className="bg-overlay bg-dark bg-opacity-50" />
              {/* Title */}
              <div className="card-img-overlay d-flex align-items-center justify-content-center text-center z-index-2">
                <h4>Blogs</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* **************** MAIN CONTENT START **************** */}
    {/* =======================
Main Banner START */}
    {/* =======================
Main Banner END */}
    {/* =======================
Blog list and sidebr START */}
    <section className="pt-7 bg-dark" data-bs-theme="dark">
      <div className="container">
        {/* Blog grid */}
        <div className="row g-3 g-sm-5 g-xl-7 mt-0">
          {/* Item */}
          <div className="col-md-6 col-lg-4">
            <article className="card bg-transparent h-100 p-0">
              {/* Badge */}
              <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">
                Technology
              </div>
              {/* Card image */}
              <img
                src="assets/images/blog/eklogi-blog.jpg"
                className="card-img"
                alt="Blog-img"
              />
              {/* Card Body */}
              <div className="card-body px-2 pb-4">
                {/* Title */}

                <h6 className="card-title mb-2">
                  <NavLink
                    to="/future-proofing-indian-banks"
                    style={{
                      color: "#fff", // Assuming text-primary is a blue shade
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.15s ease-in-out",
                    }}
                  >
                    Future-Proofing Indian Banks
                  </NavLink>
                </h6>
              </div>
            </article>
          </div>
          {/* Item */}
          <div className="col-md-6 col-lg-4">
            <article className="card bg-transparent h-100 p-0">
              {/* Badge */}
              <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">
                Technology
              </div>
              {/* Card image */}
              <img
                src="assets/images/blog/devops-ekology.jpg"
                className="card-img"
                alt="Blog-img"
              />
              {/* Card Body */}
              <div className="card-body px-2 pb-4">
                {/* Title */}
                <h6 className="card-title mb-2">
                  <NavLink
                    to="/devOps-in-banking"
                    style={{
                      color: "#fff", // Assuming text-primary is a blue shade
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.15s ease-in-out",
                    }}
                  >
                    DevOps in Banking: Reducing Failures, Accelerating Delivery
                  </NavLink>
                </h6>
              </div>
            </article>
          </div>
          {/* Item */}
          <div className="col-md-6 col-lg-4">
            <article className="card bg-transparent h-100 p-0">
              {/* Badge */}
              <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">
                Technology
              </div>
              {/* Card image */}
              <img
                src="assets/images/blog/devops-ekology.jpg"
                className="card-img"
                alt="Blog-img"
              />
              {/* Card Body */}
              <div className="card-body px-2 pb-4">
                {/* Title */}
                <h6 className="card-title mb-2">
                  <NavLink
                    href="/why-indian-banks-must-embrace-full-stack-observability"
                    style={{
                      color: "#fff", // Assuming text-primary is a blue shade
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.15s ease-in-out",
                    }}
                  >
                    Why Indian Banks Must Embrace Full-Stack Observability
                  </NavLink>
                </h6>
              </div>
            </article>
          </div>
          {/* Item */}
          <div className="col-md-6 col-lg-4">
            <article className="card bg-transparent h-100 p-0">
              {/* Badge */}
              <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">
                Technology
              </div>
              {/* Card image */}
              <img
                src="assets/images/blog/devops-ekology.jpg"
                className="card-img"
                alt="Blog-img"
              />
              {/* Card Body */}
              <div className="card-body px-2 pb-4">
                {/* Title */}
                <h6 className="card-title mb-2">
                  <NavLink
                    href="/unlocking-the-future-of-financial-insights"
                    style={{
                      color: "#fff", // Assuming text-primary is a blue shade
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.15s ease-in-out",
                    }}
                  >
                    Unlocking the Future of Financial Insights
                  </NavLink>
                </h6>
              </div>
            </article>
          </div>
          {/* Item */}
          <div className="col-md-6 col-lg-4">
            <article className="card bg-transparent h-100 p-0">
              {/* Badge */}
              <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">
                Technology
              </div>
              {/* Card image */}
              <img
                src="assets/images/blog/devops-ekology.jpg"
                className="card-img"
                alt="Blog-img"
              />
              {/* Card Body */}
              <div className="card-body px-2 pb-4">
                {/* Title */}
                <h6 className="card-title mb-2">
                  <NavLink
                    href="/from-rule-based-systems-to-AI-Powered-Fraud-Detection"
                    style={{
                      color: "#fff", // Assuming text-primary is a blue shade
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.15s ease-in-out",
                    }}
                  >
                    From Rule-Based Systems to AI-Powered Fraud Detection
                  </NavLink>
                </h6>
              </div>
            </article>
          </div>
          {/* Item */}
          <div className="col-md-6 col-lg-4">
            <article className="card bg-transparent h-100 p-0">
              {/* Badge */}
              <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">
                Technology
              </div>
              {/* Card image */}
              <img
                src="assets/images/blog/blognew11.jpeg"
                className="card-img"
                alt="Blog-img"
                style={{ height: 370 }}
              />
              {/* Card Body */}
              <div className="card-body px-2 pb-4">
                {/* Title */}
                <h6 className="card-title mb-2">
                  <NavLink
                    href="/from-rule-based-systems-to-AI-Powered-Fraud-Detection"
                    style={{
                      color: "#fff", // Assuming text-primary is a blue shade
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.15s ease-in-out",
                    }}
                  >
                    From Compliance to Confidence: Reimagining Stress Testing
                    for a Volatile World
                  </NavLink>
                </h6>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Blog list and sidebar END */}
  </>
);

export default Blog;
