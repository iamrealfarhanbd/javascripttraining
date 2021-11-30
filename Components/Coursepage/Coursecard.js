import React from "react";

const Coursecard = ({ card }) => {
  return (
    <>
      <div className="col max-mb-30" data-aos="fade-up">
        <div className="course">
          <div className="thumbnail">
            <span className="badge">Free</span>
            <a href="course-details-standard-sidebar.html" className="image">
              <img src={card.img} alt="Course Image" />
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
    </>
  );
};

export default Coursecard;
