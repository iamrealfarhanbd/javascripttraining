const Pricesidebar = () => {
  return (
    <div className="sidebar-entry-course-info">
      <div className="course-price">
        <span className="meta-label">
          <i className="meta-icon far fa-money-bill-wave" />
          Price
        </span>
        <span className="meta-value">
          <span className="price">Free</span>
        </span>
      </div>
      <div className="course-meta">
        <div className="course-instructor">
          <span className="meta-label">
            <i className="far fa-chalkboard-teacher" />
            Instructor
          </span>
          <span className="meta-value">Maggie Strickland</span>
        </div>
        <div className="course-duration">
          <span className="meta-label">
            <i className="far fa-clock" />
            Duration
          </span>
          <span className="meta-value">15 weeks</span>
        </div>
        <div className="course-lectures">
          <span className="meta-label">
            <i className="far fa-file-alt" />
            Lectures
          </span>
          <span className="meta-value">24</span>
        </div>
        <div className="course-students">
          <span className="meta-label">
            <i className="far fa-user-alt" />
            Enrolled
          </span>
          <span className="meta-value">629 students</span>
        </div>
        <div className="course-language">
          <span className="meta-label">
            <i className="far fa-language" />
            Language
          </span>
          <span className="meta-value">English</span>
        </div>
        <div className="course-time">
          <span className="meta-label">
            <i className="far fa-calendar" />
            Deadline
          </span>
          <span className="meta-value">05 Jan 2019</span>
        </div>
      </div>
      <div className="lp-course-buttons">
        <button className="btn btn-primary btn-hover-secondary btn-width-100">
          Enroll
        </button>
      </div>
      <div className="entry-course-share">
        <div className="share-media">
          <div className="share-label">Share this course</div>
          <span className="share-icon far fa-share-alt" />
          <div className="share-list">
            <a
              className="hint--bounce hint--top hint--theme-two"
              aria-label="Facebook"
              target="_blank"
              href="JavaScript:Void(0);"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="hint--bounce hint--top hint--theme-two"
              aria-label="Twitter"
              target="_blank"
              href="JavaScript:Void(0);"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="hint--bounce hint--top hint--theme-two"
              aria-label="Linkedin"
              target="_blank"
              href="JavaScript:Void(0);"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="hint--bounce hint--top hint--theme-two"
              aria-label="Tumblr"
              target="_blank"
              href="JavaScript:Void(0);"
            >
              <i className="fab fa-tumblr-square" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricesidebar;
