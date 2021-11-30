import React from "react";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="testimonial-section section section-padding">
      <div className="container">
        {/* Section Title Start */}
        <div
          className="section-title text-center margin-bottom-100"
          data-aos="fade-up"
        >
          <h2 className="title fz-48">
            Why Do People <span>*Hearts*</span> Us?
          </h2>
        </div>
        {/* Section Title End */}
        <div className="row">
          <div className="col-lg-12">
            {/*Testimonial Slider Start */}
            <div
              className="testimonial-slider-three swiper-container"
              data-aos="fade-up"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-five">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonial/200/testimonial-avata-01.jpg"
                        alt
                      />
                    </div>
                    <div className="author-content">
                      <div className="content">
                        <h3 className="title">
                          I am happy with their arrangement of lessons and
                          subjects. They reflect a scientific investigation.
                        </h3>
                      </div>
                      <div className="author-info">
                        <div className="cite">
                          <h6 className="name">Luvic Dubble</h6>
                          <span className="position">/ Private Tutor</span>
                        </div>
                      </div>
                    </div>
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
                          src="assets/images/shape-animation/shape-3.png"
                          alt
                        />
                      </span>
                    </div>
                    {/* Animation Shape End */}
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-five">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonial/200/testimonial-avata-02.jpg"
                        alt
                      />
                    </div>
                    <div className="author-content">
                      <div className="content">
                        <h3 className="title">
                          I'm a very strict person so I require everything to be
                          organized and neat. MaxCoach guys just got me.
                        </h3>
                      </div>
                      <div className="author-info">
                        <div className="cite">
                          <h6 className="name">Florence Themes</h6>
                          <span className="position">/ Multimedia Admin</span>
                        </div>
                      </div>
                    </div>
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
                          src="assets/images/shape-animation/shape-3.png"
                          alt
                        />
                      </span>
                    </div>
                    {/* Animation Shape End */}
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-five">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonial/200/testimonial-avata-03.jpg"
                        alt
                      />
                    </div>
                    <div className="author-content">
                      <div className="content">
                        <h3 className="title">
                          I am free to learn at my own pace, follow my own
                          schedule and choose the subject I like. Great study
                          portal for people like me.
                        </h3>
                      </div>
                      <div className="author-info">
                        <div className="cite">
                          <h6 className="name">Mina Hollace</h6>
                          <span className="position">/ Freelancer</span>
                        </div>
                      </div>
                    </div>
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
                          src="assets/images/shape-animation/shape-3.png"
                          alt
                        />
                      </span>
                    </div>
                    {/* Animation Shape End */}
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-five">
                    <div className="author-image">
                      <img
                        src="assets/images/testimonial/200/testimonial-avata-04.jpg"
                        alt
                      />
                    </div>
                    <div className="author-content">
                      <div className="content">
                        <h3 className="title">
                          MaxCoach is my best choice. Their tutors are smart and
                          professional when dealing with students.
                        </h3>
                      </div>
                      <div className="author-info">
                        <div className="cite">
                          <h6 className="name">Madley Pondor</h6>
                          <span className="position">/ IT Specialist</span>
                        </div>
                      </div>
                    </div>
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
                          src="assets/images/shape-animation/shape-3.png"
                          alt
                        />
                      </span>
                    </div>
                    {/* Animation Shape End */}
                  </div>
                </div>
              </div>
            </div>
            {/*Testimonial Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
