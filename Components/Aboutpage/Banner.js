import React from "react";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="page-banner-section section section-padding-200"
      data-bg-image="./assets/images/page-banner/about-us-01-hero-bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-banner-title">
              <h1 className="title">
                Grow strong to take up the challenges of life. The top lessons
                for getting you back on track.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
