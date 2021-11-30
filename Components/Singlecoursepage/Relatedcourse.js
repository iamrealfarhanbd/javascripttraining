import { useEffect } from "react";

const Relatedcourse = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="related-courses-section section section-padding">
      <div className="container">
        {/* Section Title Start */}
        <div className="section-title text-center mb-35" data-aos="fade-up">
          <h3 className="title">Related Courses​</h3>
        </div>
        {/* Section Title End */}
        {/* Courses Wrapper Start */}
        <div className="courses-slider swiper-container" data-aos="fade-up">
          <div className="swiper-wrapper">
            {/* Course Start */}
            <div className="swiper-slide mb-30">
              <div className="course box-shadow">
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
            <div className="swiper-slide mb-30">
              <div className="course box-shadow">
                <div className="thumbnail">
                  <span className="badge">Free</span>
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
                  <span className="price">
                    $0<span>.00</span>
                  </span>
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
            <div className="swiper-slide mb-30">
              <div className="course box-shadow">
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
            <div className="swiper-slide mb-30">
              <div className="course box-shadow">
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
            <div className="swiper-slide mb-30">
              <div className="course box-shadow">
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
            <div className="swiper-slide mb-30">
              <div className="course box-shadow">
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
          <div className="swiper-pagination" />
        </div>
        {/* Courses Wrapper End */}
      </div>
    </div>
  );
};

export default Relatedcourse;
