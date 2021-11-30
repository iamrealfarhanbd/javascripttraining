import React from "react";
import { useEffect } from "react";

const Brand = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="brand-section section section-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-wrapper">
              <div className="brand-list">
                <div
                  className="brand-carousel swiper-container"
                  data-aos="fade-up"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide brand brand-colored">
                      <a href="#">
                        <img
                          src="assets/images/brand/client-logo-colored-01.png"
                          alt="logo image"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide brand brand-colored">
                      <a href="#">
                        <img
                          src="assets/images/brand/client-logo-colored-02.png"
                          alt="logo image"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide brand brand-colored">
                      <a href="#">
                        <img
                          src="assets/images/brand/client-logo-colored-03.png"
                          alt="logo image"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide brand brand-colored">
                      <a href="#">
                        <img
                          src="assets/images/brand/client-logo-colored-04.png"
                          alt="logo image"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide brand brand-colored">
                      <a href="#">
                        <img
                          src="assets/images/brand/client-logo-colored-05.png"
                          alt="logo image"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide brand brand-colored">
                      <a href="#">
                        <img
                          src="assets/images/brand/client-logo-colored-06.png"
                          alt="logo image"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide brand brand-colored">
                      <a href="#">
                        <img
                          src="assets/images/brand/client-logo-colored-01.png"
                          alt="logo image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
