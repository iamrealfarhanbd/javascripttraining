import React from "react";
import { useEffect } from "react";

const Potentials = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="potentials-section section section-padding"
      data-bg-color="#f5f7fa"
    >
      <div className="container">
        {/* Section Title Start */}
        <div
          className="section-title text-center margin-bottom-100"
          data-aos="fade-up"
        >
          <span className="sub-title">Maximize your potentials</span>
          <h2 className="title fz-48">
            Things We <span>Can Help</span> You.
          </h2>
        </div>
        {/* Section Title End */}
        <div className="row row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            {/* Feature Wrapper Start */}
            <div className="row row-cols-xl-2 row-cols-sm-2 row-cols-1">
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-60" data-aos="fade-up">
                <a
                  href="courses-grid-1.html"
                  className="icon-box icon-box-left text-left"
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-flag2.svg"
                      alt
                    />
                  </div>
                  <div className="content">
                    <h3 className="title fz-20">Life Mentoring</h3>
                    <div className="desc">
                      <p>
                        Get some soul healing and guidance for your future
                        career and vocational directions.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-60" data-aos="fade-up">
                <a
                  href="courses-grid-1.html"
                  className="icon-box icon-box-left text-left"
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-gear.svg"
                      alt
                    />
                  </div>
                  <div className="content">
                    <h3 className="title fz-20">Self Development</h3>
                    <div className="desc">
                      <p>
                        Develop skills for career of various majors including
                        computer science &amp; language competence.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-60" data-aos="fade-up">
                <a
                  href="courses-grid-1.html"
                  className="icon-box icon-box-left text-left"
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-life-buoy.svg"
                      alt
                    />
                  </div>
                  <div className="content">
                    <h3 className="title fz-20">Ask Consultancy</h3>
                    <div className="desc">
                      <p>
                        Make a reservation with our special consultant to learn
                        what's best for your dream career.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-60" data-aos="fade-up">
                <a
                  href="courses-grid-1.html"
                  className="icon-box icon-box-left text-left"
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-display.svg"
                      alt
                    />
                  </div>
                  <div className="content">
                    <h3 className="title fz-20">Remote Learning</h3>
                    <div className="desc">
                      <p>
                        Learn from anywhere in the world on desktop, tablet or
                        mobile phone with an Internet connection.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
            </div>
            {/* Feature Wrapper End */}
          </div>
          <div className="col">
            <div className="potentials-image">
              <img
                src="assets/images/about/about03/about-us-03-image-02.png"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potentials;
