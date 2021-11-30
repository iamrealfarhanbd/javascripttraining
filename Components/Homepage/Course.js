import React from "react";
import { useEffect } from "react";

const Course = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="section section-padding" data-bg-color="#FAF8F6">
      <div className="container">
        {/* Section Title Start */}
        <div className="section-title text-center" data-aos="fade-up">
          <span className="sub-title">Choose where you'd like to begin</span>
          <h2 className="title fz-48">
            Latest Featured <span>Courses</span>
          </h2>
        </div>
        {/* Section Title End */}
        {/* Course Wrapper Start */}
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
          {/* Course Start */}
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="course-4">
              <div className="thumbnail">
                <a
                  href="course-details-standard-sidebar.html"
                  className="image"
                >
                  <img
                    src="assets/images/courses/370/course-1.jpg"
                    alt="Course Image"
                  />
                </a>
              </div>
              <div className="info">
                <span className="price">
                  $40<span>.00</span>
                </span>
                <div className="course-instructor">
                  <div className="instructor-avatar">
                    <img src="assets/images/courses/course-avatar.jpeg" alt />
                  </div>
                  <span className="instructor-name">Blanche Fields</span>
                </div>
                <h3 className="title">
                  <a href="course-details-standard-sidebar.html">
                    Learning to Write as a Professional Author
                  </a>
                </h3>
                <ul className="meta">
                  <li>
                    <i className="far fa-file-alt" />
                    20 Lessons
                  </li>
                  <li>
                    <i className="far fa-user-alt" />
                    51 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Course End */}
          {/* Course Start */}
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="course-4">
              <div className="thumbnail">
                <a
                  href="course-details-standard-sidebar.html"
                  className="image"
                >
                  <img
                    src="assets/images/courses/370/course-2.jpg"
                    alt="Course Image"
                  />
                </a>
              </div>
              <div className="info">
                <span className="price">Free</span>
                <div className="course-instructor">
                  <div className="instructor-avatar">
                    <img src="assets/images/courses/course-avatar.jpeg" alt />
                  </div>
                  <span className="instructor-name">Blanche Fields</span>
                </div>
                <h3 className="title">
                  <a href="course-details-standard-sidebar.html">
                    Customer-centric Info-Tech Strategies
                  </a>
                </h3>
                <ul className="meta">
                  <li>
                    <i className="far fa-file-alt" />
                    23 Lessons
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Course End */}
          {/* Course Start */}
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="course-4">
              <div className="thumbnail">
                <a
                  href="course-details-standard-sidebar.html"
                  className="image"
                >
                  <img
                    src="assets/images/courses/370/course-3.jpg"
                    alt="Course Image"
                  />
                </a>
              </div>
              <div className="info">
                <span className="price">
                  $19<span>.00</span>
                </span>
                <div className="course-instructor">
                  <div className="instructor-avatar">
                    <img src="assets/images/courses/course-avatar.jpeg" alt />
                  </div>
                  <span className="instructor-name">Blanche Fields</span>
                </div>
                <h3 className="title">
                  <a href="course-details-standard-sidebar.html">
                    Open Programming Courses for Everyone: Python
                  </a>
                </h3>
                <ul className="meta">
                  <li>
                    <i className="far fa-file-alt" />
                    16 Lessons
                  </li>
                  <li>
                    <i className="far fa-user-alt" />
                    57 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Course End */}
          {/* Course Start */}
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="course-4">
              <div className="thumbnail">
                <a
                  href="course-details-standard-sidebar.html"
                  className="image"
                >
                  <img
                    src="assets/images/courses/370/course-4.jpg"
                    alt="Course Image"
                  />
                </a>
              </div>
              <div className="info">
                <span className="price">
                  $26<span>.00</span>
                </span>
                <div className="course-instructor">
                  <div className="instructor-avatar">
                    <img src="assets/images/courses/course-avatar.jpeg" alt />
                  </div>
                  <span className="instructor-name">Blanche Fields</span>
                </div>
                <h3 className="title">
                  <a href="course-details-standard-sidebar.html">
                    Academic Listening and Note-taking
                  </a>
                </h3>
                <ul className="meta">
                  <li>
                    <i className="far fa-file-alt" />
                    14 Lessons
                  </li>
                  <li>
                    <i className="far fa-user-alt" />
                    67 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Course End */}
          {/* Course Start */}
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="course-4">
              <div className="thumbnail">
                <a
                  href="course-details-standard-sidebar.html"
                  className="image"
                >
                  <img
                    src="assets/images/courses/370/course-5.jpg"
                    alt="Course Image"
                  />
                </a>
              </div>
              <div className="info">
                <span className="price">
                  $39<span>.00</span>
                </span>
                <div className="course-instructor">
                  <div className="instructor-avatar">
                    <img src="assets/images/courses/course-avatar.jpeg" alt />
                  </div>
                  <span className="instructor-name">Blanche Fields</span>
                </div>
                <h3 className="title">
                  <a href="course-details-standard-sidebar.html">
                    Master jQuery in a Short Period of Time
                  </a>
                </h3>
                <ul className="meta">
                  <li>
                    <i className="far fa-file-alt" />6 Lessons
                  </li>
                  <li>
                    <i className="far fa-user-alt" />
                    45 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Course End */}
          {/* Course Start */}
          <div className="col max-mb-30" data-aos="fade-up">
            <div className="course-4">
              <div className="thumbnail">
                <a
                  href="course-details-standard-sidebar.html"
                  className="image"
                >
                  <img
                    src="assets/images/courses/370/course-6.jpg"
                    alt="Course Image"
                  />
                </a>
              </div>
              <div className="info">
                <span className="price">
                  $59<span>.00</span>
                </span>
                <div className="course-instructor">
                  <div className="instructor-avatar">
                    <img src="assets/images/courses/course-avatar.jpeg" alt />
                  </div>
                  <span className="instructor-name">Blanche Fields</span>
                </div>
                <h3 className="title">
                  <a href="course-details-standard-sidebar.html">
                    Introduction to Javascript for Beginners
                  </a>
                </h3>
                <ul className="meta">
                  <li>
                    <i className="far fa-file-alt" />
                    14 Lessons
                  </li>
                  <li>
                    <i className="far fa-user-alt" />
                    70 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Course End */}
        </div>
        {/* Course Wrapper End */}
        <div className="row max-mt-40">
          <div className="text-center col-lg-7 mx-auto">
            <a
              href="courses-grid-1.html"
              className="btn btn-primary btn-hover-secondary"
            >
              {" "}
              View all courses <i className="far fa-long-arrow-right ml-3" />
            </a>
          </div>
        </div>
      </div>
      {/* Section Bottom Shape Start */}
      <div className="section-bottom-shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          height={100}
        >
          <path
            className="elementor-shape-fill"
            d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
          />
        </svg>
      </div>
      {/* Section Bottom Shape End */}
    </div>
  );
};

export default Course;
