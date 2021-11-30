import React from "react";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="testimonial-section section section-padding-top"
      data-bg-color="#f8f8f8"
    >
      <div className="container">
        {/* Section Title Start */}
        <div className="section-title text-center" data-aos="fade-up">
          <span className="sub-title">
            PEOPLE ARE PRAISING JavaScript training
          </span>
          <h2 className="title fz-48">
            What makes them <span>love us?</span>
          </h2>
        </div>
        {/* Section Title End */}
        {/*Testimonial Slider Start */}
        <div
          className="h5-testimonial-slider swiper-container"
          data-aos="fade-up"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {/* Static Testimonial Start */}
              <div className="static-testimonial h5-testimonial mb-30">
                <div className="testimonial-image">
                  <img
                    src="assets/images/testimonial/140/testimonial-avata-01.jpg"
                    alt
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    I love their flexibility. Even when my request is too
                    complicated to handle. they could still suggest something
                    useful for me.{" "}
                  </p>
                </div>
                <div className="author-info">
                  <div className="cite">
                    <h6 className="name">Florence Themes</h6>
                    <span className="position">/ Multimedia Admin</span>
                  </div>
                </div>
              </div>
              {/* Static Testimonial End */}
            </div>
            <div className="swiper-slide">
              {/* Static Testimonial Start */}
              <div className="static-testimonial h5-testimonial mb-30">
                <div className="testimonial-image">
                  <img
                    src="assets/images/testimonial/140/testimonial-avata-02.jpg"
                    alt
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    I am free to learn at my own pace, follow my own schedule
                    and choose the subject I like. Great study portal for people
                    like me.{" "}
                  </p>
                </div>
                <div className="author-info">
                  <div className="cite">
                    <h6 className="name">Mina Hollace</h6>
                    <span className="position">/ Freelancer</span>
                  </div>
                </div>
              </div>
              {/* Static Testimonial End */}
            </div>
            <div className="swiper-slide">
              {/* Static Testimonial Start */}
              <div className="static-testimonial h5-testimonial mb-30">
                <div className="testimonial-image">
                  <img
                    src="assets/images/testimonial/140/testimonial-avata-03.jpg"
                    alt
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    I am free to learn at my own pace, follow my own schedule
                    and choose the subject I like. Great study portal for people
                    like me.{" "}
                  </p>
                </div>
                <div className="author-info">
                  <div className="cite">
                    <h6 className="name">Madley Pondor</h6>
                    <span className="position">/ IT Specialist</span>
                  </div>
                </div>
              </div>
              {/* Static Testimonial End */}
            </div>
            <div className="swiper-slide">
              {/* Static Testimonial Start */}
              <div className="static-testimonial h5-testimonial mb-30">
                <div className="testimonial-image">
                  <img
                    src="assets/images/testimonial/140/testimonial-avata-04.jpg"
                    alt
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    I am free to learn at my own pace, follow my own schedule
                    and choose the subject I like. Great study portal for people
                    like me.{" "}
                  </p>
                </div>
                <div className="author-info">
                  <div className="cite">
                    <h6 className="name">Luvic Dubble</h6>
                    <span className="position">/ Private Tutor</span>
                  </div>
                </div>
              </div>
              {/* Static Testimonial End */}
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        {/*Testimonial Slider End */}
      </div>
    </div>
  );
};

export default Testimonial;
