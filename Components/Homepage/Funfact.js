import React from 'react'
import {useEffect} from 'react';

const Funfact = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (

                <div className="funfact-section section section-padding-top" data-bg-color="#faf8f6">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 mx-auto">
                        <div className="row row-cols-md-4 row-cols-1 max-mb-n30">
                          {/* Funfact Start */}
                          <div className="col max-mb-30" data-aos="fade-up">
                            <div className="funfact">
                              <div className="number"><span className="counter">1.926</span></div>
                              <h6 className="text">Finished Sessions</h6>
                            </div>
                          </div>
                          {/* Funfact End */}
                          {/* Funfact Start */}
                          <div className="col max-mb-30" data-aos="fade-up">
                            <div className="funfact">
                              <div className="number"><span className="counter">3.092</span>+</div>
                              <h6 className="text">Online Enrollment</h6>
                            </div>
                          </div>
                          {/* Funfact End */}
                          {/* Funfact Start */}
                          <div className="col max-mb-30" data-aos="fade-up">
                            <div className="funfact">
                              <div className="number"><span className="counter">200</span></div>
                              <h6 className="text">Subjects Taught</h6>
                            </div>
                          </div>
                          {/* Funfact End */}
                          {/* Funfact Start */}
                          <div className="col max-mb-30" data-aos="fade-up">
                            <div className="funfact">
                              <div className="number"><span className="counter">100</span>%</div>
                              <h6 className="text">Satisfaction rate</h6>
                            </div>
                          </div>
                          {/* Funfact End */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

    )
}

export default Funfact
