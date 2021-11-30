import React from 'react'
import {useEffect} from 'react';

const Faq = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (

          
                <div className="faq-section section section-padding-bottom position-relative">
                  <div className="container">
                    <div className="row row-cols-lg-2 row-cols-1 align-items-center">
                      <div className="col">
                        <div className="faq-left-image">
                          <img src="assets/images/about/about03/about-us-03-image-01.png" alt="about" />
                          {/* Animation Shape Start */}
                          <div className="shape shape-1 scene">
                            <span data-depth={3}>
                              <img src="assets/images/shape-animation/shape-2.svg" alt="" className="svgInject" />
                            </span>
                          </div>
                          {/* Animation Shape End */}
                        </div>
                      </div>
                      <div className="col">
                        <div className="faq-content-area">
                          {/* Section Title Start */}
                          <div className="section-title text-left mb-50" data-aos="fade-up">
                            <span className="sub-title">Everything <strong>MaxCoach</strong></span>
                            <h2 className="title fz-48">Get evaluated, <span>Get ahead</span> with our free JavaScript quizzes</h2>
                          </div>
                          {/* Section Title End */}
                          <div className="mx-accordion max-mb-n30" id="accordionExample">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <a href="#" className="acc-btn border-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Multiple Platforms Supported for Teaching &amp; Studying
                                  </a>
                                </h5>
                              </div>
                              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren’t supposed to be devoured in a short time, you can always access our knowledge base from any device.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <a href="#" className="acc-btn border-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Multiple Course Participation at the Same Time
                                  </a>
                                </h5>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">Study for a number of courses at the same time is possible as long as you can afford the fee and time for completing them in the proper time. Learn at your own desired timeline and timetable. Maximum up to 5 course at a time for a learner at MaxCoach.
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <a href="#" className="acc-btn border-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Track Study Progress &amp; Deliver Prompt Feedback
                                  </a>
                                </h5>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">It’s not just a normal thing to be able to build such a solid online educational system like MaxCoach where your progress is easily tracked and feedback is properly delivered. We promise to keep improving our system for better stability and flexibility.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

    )
}

export default Faq
