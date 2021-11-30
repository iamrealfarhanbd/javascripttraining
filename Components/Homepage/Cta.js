import React from "react";
import { useEffect } from "react";

const Cta = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="cta-section section section-padding"
      data-bg-color="#f8f8f8"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-content text-center">
              <span className="sub-title">
                Start today for getting <span>Online Certification</span>
              </span>
              <h2 className="title">
                Free javascript tutorials to smooth your programming
              </h2>
              <a
                href="login-register.html"
                className="btn btn-primary btn-hover-secondary btn-width-300"
              >
                {" "}
                Watch Free Tips Videos
              </a>
              {/* Animation Shape Start */}
              <div className="shape shape-1 scene">
                <span data-depth={4}>shape 1</span>
              </div>
              <div className="shape shape-2 scene">
                <span data-depth={4}>
                  <img
                    src="assets/images/shape-animation/cta-shape-01.png"
                    alt
                  />
                </span>
              </div>
              <div className="shape shape-3 scene">
                <span data-depth={4}>
                  <img
                    src="assets/images/shape-animation/nwesletter-shape-2.png"
                    alt
                  />
                </span>
              </div>
              {/* Animation Shape End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
