import React from "react";
import { useEffect } from "react";

const Downloadapp = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="download-app-section section section-padding-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="download-app-image mb-sm-50 mb-xs-50">
              <img src="assets/images/others/home-5-image-02.png" alt />
              {/* Animation Shape Start */}
              <div className="shape shape-1 scene">
                <span data-depth={3}>
                  <img
                    src="assets/images/shape-animation/shape-2.svg"
                    alt
                    className="svgInject"
                  />
                </span>
              </div>
              <div className="shape shape-2 scene">
                <span data-depth={-3}>
                  <img
                    src="assets/images/shape-animation/cta-shape-01.png"
                    alt
                  />
                </span>
              </div>
              <div className="shape shape-3 scene">
                <span data-depth={4}>shape 3</span>
              </div>
              <div className="shape shape-4 scene">
                <span data-depth={4}>
                  <img src="assets/images/shape-animation/shape-1.png" alt />
                </span>
              </div>
              {/* Animation Shape End */}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="download-app-content">
              {/* Section Title Start */}
              <div className="section-title text-left mb-30" data-aos="fade-up">
                <span className="sub-title">
                  What else are you looking for?
                </span>
                <h2 className="title fz-48">
                  Learn on your <span>mobile</span> anytime!
                </h2>
              </div>
              {/* Section Title End */}
              <p>
                JavaScript training equips you with the ultimate JS excellence
                packed with expert assistance, premium service, budget-friendly
                programming resources and all.{" "}
              </p>
              <a
                href="login-register.html"
                className="btn btn-primary btn-hover-secondary mt-30"
              >
                {" "}
                Watch More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloadapp;
