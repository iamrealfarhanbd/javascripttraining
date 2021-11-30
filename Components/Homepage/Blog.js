import React from "react";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="event-section section position-relative section-padding">
      <div className="container">
        {/* Section Title Start */}
        <div className="section-title text-center" data-aos="fade-up">
          <span className="sub-title">Get in contact now</span>
          <h2 className="title fz-48">
            Upcoming <span>Events</span>
          </h2>
        </div>
        {/* Section Title End */}
        <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="event-list-box">
              <div className="event-caption">
                <div className="left-box">
                  <div className="event-location">
                    <i className="far fa-map-marker-alt" />
                    Texas, US
                  </div>
                  <h3 className="title">Storytelling Workshop</h3>
                </div>
                <div className="right-box">
                  <div className="event-date">
                    <div className="event-date-day">22</div>
                    <div className="event-date-month">Nov</div>
                  </div>
                  <div className="event-button">
                    <a
                      className="btn btn-primary btn-hover-secondary btn-xs"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="event-list-box">
              <div className="event-caption">
                <div className="left-box">
                  <div className="event-location">
                    <i className="far fa-map-marker-alt" />
                    New York, US
                  </div>
                  <h3 className="title">Painting Art Contest 2020</h3>
                </div>
                <div className="right-box">
                  <div className="event-date">
                    <div className="event-date-day">10</div>
                    <div className="event-date-month">Oct</div>
                  </div>
                  <div className="event-button">
                    <a
                      className="btn btn-primary btn-hover-secondary btn-xs"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="event-list-box">
              <div className="event-caption">
                <div className="left-box">
                  <div className="event-location">
                    <i className="far fa-map-marker-alt" />
                    Hamburg, Germany
                  </div>
                  <h3 className="title">International Art Fair 2020</h3>
                </div>
                <div className="right-box">
                  <div className="event-date">
                    <div className="event-date-day">23</div>
                    <div className="event-date-month">Nov</div>
                  </div>
                  <div className="event-button">
                    <a
                      className="btn btn-primary btn-hover-secondary btn-xs"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="event-list-box">
              <div className="event-caption">
                <div className="left-box">
                  <div className="event-location">
                    <i className="far fa-map-marker-alt" />
                    Illinois, US
                  </div>
                  <h3 className="title">Street Performance: Call for Artist</h3>
                </div>
                <div className="right-box">
                  <div className="event-date">
                    <div className="event-date-day">15</div>
                    <div className="event-date-month">Dec</div>
                  </div>
                  <div className="event-button">
                    <a
                      className="btn btn-primary btn-hover-secondary btn-xs"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="event-list-box">
              <div className="event-caption">
                <div className="left-box">
                  <div className="event-location">
                    <i className="far fa-map-marker-alt" />
                    Illinois, US
                  </div>
                  <h3 className="title">
                    Consumer Food Safety Education Conference
                  </h3>
                </div>
                <div className="right-box">
                  <div className="event-date">
                    <div className="event-date-day">22</div>
                    <div className="event-date-month">JUL</div>
                  </div>
                  <div className="event-button">
                    <a
                      className="btn btn-primary btn-hover-secondary btn-xs"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="event-list-box">
              <div className="event-caption">
                <div className="left-box">
                  <div className="event-location">
                    <i className="far fa-map-marker-alt" />
                    Dubai
                  </div>
                  <h3 className="title">
                    How meditation improve your mental health?
                  </h3>
                </div>
                <div className="right-box">
                  <div className="event-date">
                    <div className="event-date-day">12</div>
                    <div className="event-date-month">Aug</div>
                  </div>
                  <div className="event-button">
                    <a
                      className="btn btn-primary btn-hover-secondary btn-xs"
                      href="event-details.html"
                    >
                      Get ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row max-mt-70">
          <div className="text-center col-lg-7 mx-auto">
            <a className="link link-lg" href="event.html">
              Excited about our event?{" "}
              <mark>
                View all events <i className="far fa-long-arrow-right" />
              </mark>
            </a>
          </div>
        </div>
      </div>
      {/* Section Bottom Shape Start */}
      <div className="section-bottom-shape-two">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          height={315}
        >
          <path
            className="elementor-shape-fill"
            d="M 50 0 S75 0 100 100 L100 0"
          />
        </svg>
      </div>
      {/* Section Bottom Shape End */}
    </div>
  );
};

export default Blog;
