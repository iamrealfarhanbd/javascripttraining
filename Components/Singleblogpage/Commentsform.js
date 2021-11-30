const Commentsform = () => {
  return (
    <div className="comment-respond">
      <h3 className="title">Leave your thought hereyy </h3>
      <p className="comment-notes">
        <span id="email-notes">Your email address will not be published.</span>{" "}
        Required fields are marked <span className="required">*</span>
      </p>
      <form action="#" method="post">
        <div className="row">
          <div className="col-md-6 col-12 max-mb-30">
            <input type="text" placeholder="Your Name *" name="name" />
          </div>
          <div className="col-md-6 col-12 max-mb-30">
            <input type="email" placeholder="Email *" name="email" />
          </div>
          <div className="col-12 max-mb-30">
            <textarea
              name="message"
              placeholder="Your Comment"
              defaultValue={""}
            />
          </div>
          <div className="col-12">
            <p className="comment-form-cookies-consent justify-content-start text-left">
              <input
                id="comment-cookies-consent"
                name="comment-cookies-consent"
                type="checkbox"
                defaultValue="yes"
              />
              <label htmlFor="comment-cookies-consent">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </p>
          </div>
          <div className="col-12 text-left">
            <button className="btn btn-primary btn-hover-secondary btn-width-180 btn-height-60">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Commentsform;
