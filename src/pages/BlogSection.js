import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

const BlogCard = ({ imageSrc, title, altText, url }) => {
  return (
    <article className="bg-transparent">
      <img
        src={imageSrc}
        className="w-full h-auto object-cover"
        alt={altText}
      />
      <div className="px-0 pb-0">
        <h6 className="text-lg font-semibold mb-2">{title}</h6>
        <div className="flex justify-between items-center">
          <NavLink
            to={url}
            style={{
              color: "#2563eb", // Assuming text-primary is a blue shade
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              transition: "color 0.15s ease-in-out",
            }}
          >
            Read more
            <svg
              style={{ width: "16px", height: "16px" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </article>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      imageSrc: "assets/images/blog/eklogi-blog.jpg",
      title: "Future-Proofing Indian Banks",
      altText: "Future-Proofing Indian Banks",
      url: "/future-proofing-indian-banks",
    },
    {
      imageSrc: "assets/images/blog/devops-ekology.jpg",
      title: "DevOps in Banking: Reducing Failures, Accelerating Delivery",
      altText: "DevOps in Banking",
      url: "/devOps-in-banking",
    },
    {
      imageSrc:
        "assets/images/blog/why-indian-banks-must-embrace-full-stack-observability.jpeg",
      title: "Why Indian Banks Must Embrace Full-Stack Observability",
      altText: "Full-Stack Observability",
      url: "/why-indian-banks-must-embrace-full-stack-observability",
    },
    {
      imageSrc:
        "assets/images/blog/Unlocking-the-Future-of-Financial Insights.jpeg",
      title: "Unlocking the Future of Financial Insights",
      altText: "Financial Insights",
      url: "/unlocking-the-future-of-financial-insights",
    },
    {
      imageSrc: "assets/images/blog/froud-alert-one.jpeg",
      title: "From Rule-Based Systems to AI-Powered Fraud Detection",
      altText: "Fraud Detection",
      url: "/from-rule-based-systems-to-AI-Powered-Fraud-Detection",
    },
  ];

  return (
    <section className="pb-0">
      <div className="container mx-auto px-4">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-0">Blogs</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          loop={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard
                imageSrc={blog.imageSrc}
                title={blog.title}
                altText={blog.altText}
                url={blog.url}
              />
            </SwiperSlide>
          ))}

          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
            <button className="swiper-button-prev bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="swiper-button-next bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
