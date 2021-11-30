
import {useEffect} from 'react';
const Feature = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (

          
                <div className="section section-padding">
                  <div className="container">
                    {/* Section Title Start */}
                    <div className="section-title text-center" data-aos="fade-up">
                      <span className="sub-title">Start Learning Coding Languages</span>
                      <h2 className="title fz-48">JavaScript made easy  <span>here</span></h2>
                    </div>
                    {/* Section Title End */}
                    {/* Feature Wrapper Start */}
                    <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 max-mb-n30">
                      {/* Feature Start (Icon Box) */}
                      <div className="col max-mb-30" data-aos="fade-up">
                        <a href="courses-grid-1.html" className="icon-box h5-icon-box text-center">
                          <div className="icon"><img src="assets/images/learner/home-5-image-box-01.png" alt="" /></div>
                          <div className="content">
                            <h3 className="title">Expert Instructors</h3>
                            <div className="desc">
                              <p>Instructors are sheerly potential enough in online teaching to meet your learning needs
through your screen.</p>
                            </div>
                            <span className="link">Start here <i className="far fa-long-arrow-right" /></span>
                          </div>
                        </a>
                      </div>
                      {/* Feature Start (Icon Box) */}
                      {/* Feature Start (Icon Box) */}
                      <div className="col max-mb-30" data-aos="fade-up">
                        <a href="courses-grid-1.html" className="icon-box h5-icon-box text-center">
                          <div className="icon"><img src="assets/images/learner/home-5-image-box-02.png" alt="" /></div>
                          <div className="content">
                            <h3 className="title">One-to-one courses</h3>
                            <div className="desc">
                              <p>Individual courses, designed upon your eLearning obstacles and JS fundamentals</p>
                            </div>
                            <span className="link">Start here <i className="far fa-long-arrow-right" /></span>
                          </div>
                        </a>
                      </div>
                      {/* Feature Start (Icon Box) */}
                      {/* Feature Start (Icon Box) */}
                      <div className="col max-mb-30" data-aos="fade-up">
                        <a href="courses-grid-1.html" className="icon-box h5-icon-box text-center">
                          <div className="icon"><img src="assets/images/learner/home-5-image-box-03.png" alt="" /></div>
                          <div className="content">
                            <h3 className="title">Interactive training</h3>
                            <div className="desc">
                              <p>Training sessions made interactive enough to resolve any of your JS issues</p>
                            </div>
                            <span className="link">Start here <i className="far fa-long-arrow-right" /></span>
                          </div>
                        </a>
                      </div>
                      {/* Feature Start (Icon Box) */}
                      {/* Feature Start (Icon Box) */}
                      <div className="col max-mb-30" data-aos="fade-up">
                        <a href="courses-grid-1.html" className="icon-box h5-icon-box text-center">
                          <div className="icon"><img src="assets/images/learner/home-5-image-box-04.png" alt="" /></div>
                          <div className="content">
                            <h3 className="title">Project experience</h3>
                            <div className="desc">
                              <p>Acquire project development experience while attending our quality courses</p>
                            </div>
                            <span className="link">Start here <i className="far fa-long-arrow-right" /></span>
                          </div>
                        </a>
                      </div>
                      {/* Feature Start (Icon Box) */}
                    </div>
                    {/* Feature Wrapper End */}
                  </div>
                </div>

    )
}

export default Feature
