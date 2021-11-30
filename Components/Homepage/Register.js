import React from "react";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="register-section section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5 order-2 order-lg-1">
            <div className="register-content">
              {/* Section Title Start */}
              <div className="section-title text-left mb-30" data-aos="fade-up">
                <span className="sub-title">
                  Common mistakes of Javascript programming
                </span>
                <h2 className="title fz-48">
                  Learn At Your <br /> Own <span>Pace</span>
                </h2>
              </div>
              {/* Section Title End */}
              <ul className="maxcoach-list">
                <li className="item">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="text">Using “==” instead of “===”</div>
                </li>
                <li className="item">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="text">wrong use of typeof.</div>
                </li>
                <li className="item">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="text">Using “this” incorrectly</div>
                </li>
                <li className="item">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="text">Omitting Semicolons</div>
                </li>
              </ul>
              <a
                href="course-details-free.html"
                className="btn btn-primary btn-hover-secondary"
              >
                {" "}
                Check All
              </a>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 order-1 order-lg-2">
            <div className="register-image mb-sm-50 mb-xs-50">
              <img src="assets/images/others/home-5-image-01.png" alt="" />
              {/* Animation Shape Start */}
              <div className="shape shape-1 scene">
                <span data-depth={3}>
                  <img
                    src="assets/images/shape-animation/shape-2.svg"
                    alt=""
                    className="svgInject"
                  />
                </span>
              </div>
              <div className="shape shape-2 scene">
                <span data-depth={-3}>
                  <img src="assets/images/shape-animation/shape-3.png" alt="" />
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

export default Register;
