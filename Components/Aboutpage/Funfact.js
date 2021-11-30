import React from "react";

const Funfact = () => {
  return (
    <div
      className="funfact-section section section-padding-bottom"
      data-bg-color="#f5f5f5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content mb-sm-50 mb-xs-50">
              <span className="sub-title">
                Everything is <strong>MaxCoach</strong>
              </span>
              <h2 className="title">
                Maximizing Your Potentials with <span>MaxCoach Edu</span>{" "}
              </h2>
              <p>
                We love to inspire and guide you through any subject, develop
                new skills or upgrade your educational background.{" "}
              </p>
              <a className="link link-lg" href="JavaScript:Void(0);">
                {" "}
                Have questions?​{" "}
                <mark>
                  Get Free Form <i className="far fa-long-arrow-right" />
                </mark>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row row-cols-sm-2 row-cols-1 max-mb-n60">
              {/* Funfact Start */}
              <div className="col max-mb-60" data-aos="fade-up">
                <div className="funfact">
                  <div className="number">
                    <span className="counter">1.926</span>
                  </div>
                  <h6 className="text">Finished Sessions</h6>
                </div>
              </div>
              {/* Funfact End */}
              {/* Funfact Start */}
              <div className="col max-mb-60" data-aos="fade-up">
                <div className="funfact">
                  <div className="number">
                    <span className="counter">3.092</span>+
                  </div>
                  <h6 className="text">Online Enrollment</h6>
                </div>
              </div>
              {/* Funfact End */}
              {/* Funfact Start */}
              <div className="col max-mb-60" data-aos="fade-up">
                <div className="funfact">
                  <div className="number">
                    <span className="counter">200</span>
                  </div>
                  <h6 className="text">Subjects Taught</h6>
                </div>
              </div>
              {/* Funfact End */}
              {/* Funfact Start */}
              <div className="col max-mb-60" data-aos="fade-up">
                <div className="funfact">
                  <div className="number">
                    <span className="counter">100</span>%
                  </div>
                  <h6 className="text">Satisfaction rate</h6>
                </div>
              </div>
              {/* Funfact End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funfact;
