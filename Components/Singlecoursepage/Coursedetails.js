import { useEffect } from "react";
import Pricesidebar from "./Pricesidebar";

const Coursedetails = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="section">
      <div className="container">
        <div className="row max-mb-n50">
          <div className="col-lg-8 col-12 order-lg-1 max-mb-50">
            {/* Course Details Wrapper Start */}
            <div className="course-details-wrapper">
              <div className="course-nav-tab">
                <ul className="nav">
                  <li>
                    <a className="active" data-toggle="tab" href="#overview">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#curriculum">
                      Curriculum
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#instructor">
                      Instructor
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#reviews">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div id="overview" className="tab-pane fade show active">
                  <div className="course-overview">
                    <h3 className="title">Course Description</h3>
                    <p>
                      Now more than ever, corporations are investing heavily in
                      IT. The quality of these investments affects the daily
                      work of millions.
                    </p>
                    <p>
                      Yet it’s not uncommon to see industry surveys where the
                      failure rates for IT projects is over 50%. It’s possible
                      to do better and it’s possible to do so consistently. Use
                      the Business Model Canvas to focus your company strategy
                      and facilitate buy-in from stakeholders.
                    </p>
                    <div className="overview-course-video">
                      <iframe
                        title="Drive Digital Transformation With Platform Strategies | Info-Tech Analyst Perspective"
                        src="https://www.youtube.com/embed/m-X1ExlQ9uE?feature=oembed"
                      />
                    </div>
                    <p>
                      In this two-week course, we’ll step through major
                      challenges within corporate IT and how to address them
                      with the disciplined use of design thinking, Lean Startup,
                      and agile as a team framework.
                    </p>
                    <p>
                      Translate your work on the Canvas to specific charters in
                      IT. Rapidly prototype strategically-aligned processes for
                      implementation within your IT infrastructure. How do you
                      define a customer-centric strategy you can actually
                      execute? To do strategic IT, you’ve got to have a
                      strategy! Ideally, you need one that’s easy to understand
                      and use as a clear basis for action.
                    </p>
                    <p>That’s what you’ll learn in this course.</p>
                    <h3 className="title">A Short Description</h3>
                    <p>
                      A customer-centric way of doing business is a way that
                      provides a positive customer experience before and after
                      the sale in order to drive repeat business, enhance
                      customer loyalty and improve business growth.
                    </p>
                    <p>
                      But, a customer-centric company is more than a company
                      that offers good service. Both Amazon and Zappos are prime
                      examples of brands that are customer-centric and have
                      spent years creating a culture around the customer and
                      their needs. Their commitment to delivering customer value
                      is genuine – In fact, Zappos is happy to fire employees if
                      they do not fit within their customer-centric culture!
                    </p>
                    <p>
                      But, how important is being customer-centric? The good
                      news is that’s becoming very important! Econsultancy
                      recently asked what the most important characteristic is
                      in order to establish a truly “digital-native” culture.
                      The answer to that question and leading the responses with
                      58% was to be customer-centric.{" "}
                    </p>
                    <p>Enroll in this course to find out.</p>
                  </div>
                </div>
                <div id="curriculum" className="tab-pane fade">
                  <div className="course-curriculum">
                    <ul className="curriculum-sections">
                      <li className="single-curriculum-section">
                        <div className="section-header">
                          <div className="section-left">
                            <h5 className="title">Change simplification</h5>
                            <p className="section-desc">
                              General introduction to customer-centric
                              strategies
                            </p>
                          </div>
                        </div>
                        <ul className="section-content">
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 01: Simple, attainable goals
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  30 min
                                </span>
                                <span className="item-meta item-meta-icon video">
                                  <i className="far fa-video" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Live meeting about Infotech Strategies
                              </span>
                              <div className="course-item-meta">
                                <i className="fas fa-lock-alt" />
                                <span className="item-meta item-meta-icon zoom-meeting">
                                  <i className="far fa-users-class" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Quiz 1: Yes or No?
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  3 questions
                                </span>
                                <span className="item-meta duration">
                                  15 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Quiz 2: A simple simulation game
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  0 question
                                </span>
                                <span className="item-meta duration">
                                  50 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 02: A/B Testing
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  02 hour
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Quiz 3: Role-play game
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  1 question
                                </span>
                                <span className="item-meta duration">
                                  01 hour
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Quiz 4: Short Interview
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  9 questions
                                </span>
                                <span className="item-meta duration">
                                  10 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 03: Wrap up about A/B testing
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  30 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Quiz 5: 15 mins of Yes/No questions
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  3 questions
                                </span>
                                <span className="item-meta duration">
                                  10 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Quiz 6: Quick answers
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  0 question
                                </span>
                                <span className="item-meta duration">
                                  10 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="single-curriculum-section">
                        <div className="section-header">
                          <div className="section-left">
                            <h5 className="title">Customer Advisory Board</h5>
                            <p className="section-desc">
                              Learn about the basics of Customer Advisory Board
                            </p>
                          </div>
                        </div>
                        <ul className="section-content">
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 04: Customer Advisory Board
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  30 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 05: The role of Customer Advisory Board
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  45 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 06: Customer Advisory Board Institutions
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  3 questions
                                </span>
                                <span className="item-meta duration">
                                  15 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Mid-term test : 60-min writing test
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  5 question
                                </span>
                                <span className="item-meta duration">
                                  01 hour
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="single-curriculum-section">
                        <div className="section-header">
                          <div className="section-left">
                            <h5 className="title">Feedback survey</h5>
                            <p className="section-desc">
                              The major things about conducting a survey and
                              manage feedback
                            </p>
                          </div>
                        </div>
                        <ul className="section-content">
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 07: The importance of customer feedback
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  30 min
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 08: Customers’ roles
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  45 min
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link lesson"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Lesson 09: How to conduct the survey
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta duration">
                                  01 hour
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="course-item">
                            <a
                              className="section-item-link"
                              href="JavaScript:Void(0);"
                            >
                              <span className="item-name">
                                Discussion: How to write good survey and poll
                                questions?
                              </span>
                              <div className="course-item-meta">
                                <span className="item-meta count-questions">
                                  0 question
                                </span>
                                <span className="item-meta duration">
                                  01 hour
                                </span>
                                <span className="item-meta item-meta-icon">
                                  <i className="fas fa-lock-alt" />
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="single-curriculum-section">
                        <div className="section-header">
                          <div className="section-left">
                            <h5 className="title">
                              Professor for a Day Simulation
                            </h5>
                            <p className="section-desc">
                              This simulation will be held by tutors and
                              learners online.
                            </p>
                          </div>
                        </div>
                        <div className="learn-press-message success ml-15 mr-15">
                          <i className="fa" />
                          No items in this section
                        </div>
                      </li>
                      <li className="single-curriculum-section">
                        <div className="section-header">
                          <div className="section-left">
                            <h5 className="title">
                              Customer Behavior Case Studies
                            </h5>
                            <p className="section-desc">
                              In this section, learners will have a chance to
                              discuss thoroughly the role of customer behaviors
                              in business.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="instructor" className="tab-pane fade">
                  <div className="course-instructor">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="profile-image">
                          <img
                            src="assets/images/profile/instructor.jpeg"
                            alt="profile"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="profile-info">
                          <h5>
                            <a href="profile.html">Maggie Strickland</a>
                          </h5>
                          <div className="author-career">
                            /Advanced Educator
                          </div>
                          <p className="author-bio">
                            Maggie is a brilliant educator, whose life was spent
                            for computer science and love of nature. Being a
                            female, she encountered a lot of obstacles and was
                            forbidden to work in this field by her family. With
                            a true spirit and talented gift, she was able to
                            succeed and set an example for others.
                          </p>
                          <ul className="author-social-networks">
                            <li className="item">
                              <a
                                href="JavaScript:Void(0);"
                                target="_blank"
                                className="social-link"
                              >
                                {" "}
                                <i className="fab fa-twitter social-link-icon" />{" "}
                              </a>
                            </li>
                            <li className="item">
                              <a
                                href="JavaScript:Void(0);"
                                target="_blank"
                                className="social-link"
                              >
                                {" "}
                                <i className="fab fa-facebook-f social-link-icon" />{" "}
                              </a>
                            </li>
                            <li className="item">
                              <a
                                href="JavaScript:Void(0);"
                                target="_blank"
                                className="social-link"
                              >
                                {" "}
                                <i className="fab fa-instagram social-link-icon" />{" "}
                              </a>
                            </li>
                            <li className="item">
                              <a
                                href="JavaScript:Void(0);"
                                target="_blank"
                                className="social-link"
                              >
                                {" "}
                                <i className="fab fa-pinterest social-link-icon" />{" "}
                              </a>
                            </li>
                            <li className="item">
                              <a
                                href="JavaScript:Void(0);"
                                target="_blank"
                                className="social-link"
                              >
                                {" "}
                                <i className="fab fa-youtube social-link-icon" />{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="reviews" className="tab-pane fade">
                  <div className="course-reviews">
                    <div className="course-rating">
                      <h3 className="title">Reviews</h3>
                      <div className="course-rating-content">
                        <div className="average-rating">
                          <p className="rating-title secondary-color">
                            Average Rating
                          </p>
                          <div className="rating-box">
                            <div className="average-value primary-color">
                              4.50
                            </div>
                            <div className="review-star">
                              <div className="tm-star-rating">
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star-half-alt" />
                              </div>
                            </div>
                            <div className="review-amount">(2 ratings)</div>
                          </div>
                        </div>
                        <div className="detailed-rating">
                          <p className="rating-title secondary-color">
                            Detailed Rating
                          </p>
                          <div className="rating-box">
                            <div className="rating-rated-item">
                              <div className="rating-point">
                                <div className="tm-star-rating">
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                </div>
                              </div>
                              <div className="rating-progress">
                                <div className="single-progress-bar">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="rating-count">1</div>
                            </div>
                            <div className="rating-rated-item">
                              <div className="rating-point">
                                <div className="tm-star-rating">
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="far fa-star" />
                                </div>
                              </div>
                              <div className="rating-progress">
                                <div className="single-progress-bar">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="rating-count">1</div>
                            </div>
                            <div className="rating-rated-item">
                              <div className="rating-point">
                                <div className="tm-star-rating">
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="far fa-star" />
                                  <span className="far fa-star" />
                                </div>
                              </div>
                              <div className="rating-progress">
                                <div className="single-progress-bar">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={0}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="rating-count">0</div>
                            </div>
                            <div className="rating-rated-item">
                              <div className="rating-point">
                                <div className="tm-star-rating">
                                  <span className="fas fa-star" />
                                  <span className="fas fa-star" />
                                  <span className="far fa-star" />
                                  <span className="far fa-star" />
                                  <span className="far fa-star" />
                                </div>
                              </div>
                              <div className="rating-progress">
                                <div className="single-progress-bar">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={0}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="rating-count">0</div>
                            </div>
                            <div className="rating-rated-item">
                              <div className="rating-point">
                                <div className="tm-star-rating">
                                  <span className="fas fa-star" />
                                  <span className="far fa-star" />
                                  <span className="far fa-star" />
                                  <span className="far fa-star" />
                                  <span className="far fa-star" />
                                </div>
                              </div>
                              <div className="rating-progress">
                                <div className="single-progress-bar">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={0}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="rating-count">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-reviews-area">
                      <ul className="course-reviews-list">
                        <li className="review">
                          <div className="review-container">
                            <div className="review-author">
                              <img
                                src="assets/images/review-author/author1.jpeg"
                                alt="author"
                              />
                            </div>
                            <div className="review-content">
                              <h4 className="title">ednawatson</h4>
                              <div
                                className="review-stars-rated"
                                title="5 out of 5 stars"
                              >
                                <div className="review-stars empty" />
                              </div>
                              <h5 className="review-title">
                                Cover all my needs{" "}
                              </h5>
                              <div className="review-text">
                                The course identify things we want to change and
                                then figure out the things that need to be done
                                to create the desired outcome. The course helped
                                me in clearly define problems and generate a
                                wider variety of quality solutions. Support more
                                structures analysis of options leading to better
                                decisions.
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="review">
                          <div className="review-container">
                            <div className="review-author">
                              <img
                                src="assets/images/review-author/author2.jpeg"
                                alt="author"
                              />
                            </div>
                            <div className="review-content">
                              <h4 className="title">Owen Christ</h4>
                              <div
                                className="review-stars-rated"
                                title="5 out of 5 stars"
                              >
                                <div className="review-stars empty" />
                              </div>
                              <h5 className="review-title">
                                Engaging &amp; Fun
                              </h5>
                              <div className="review-text">
                                This is the third course I attend from you, and
                                I absolutely loved all of them. Especially this
                                one on leadership. Your method of explaining the
                                concepts, fun, engaging and with real-world
                                examples, is excellent. This course will help me
                                a lot in my job, my career, and life in general,
                                and I thank you for that. Thank you for
                                improving the lives of many people with engaging
                                and in-depth courses.
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Course Details Wrapper End */}
          </div>
          <div
            className="col-lg-4 col-12 order-lg-2 max-mb-50"
            id="sticky-sidebar"
          >
            <div className="sidebar-widget-wrapper pr-0">
              <div className="sidebar-widget">
                <div className="sidebar-widget-content">
                  <Pricesidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
