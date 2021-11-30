import React from "react";

const Contactform = () => {
  return (
    <div className="contact-form-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8">
            <div className="contact-title max-width-600">
              <h2 className="title">
                Fill out this form for booking a consultant advising session.
              </h2>
            </div>
            <div className="contact-form">
              <form
                action="assets/php/contact-mail.php"
                id="contact-form"
                method="post"
              >
                <div className="row max-mb-n30">
                  <div className="col-md-6 col-12 max-mb-30">
                    <input type="text" placeholder="Your Name *" name="name" />
                  </div>
                  <div className="col-md-6 col-12 max-mb-30">
                    <input type="email" placeholder="Email *" name="email" />
                  </div>
                  <div className="col-md-12 col-12 max-mb-30">
                    <input type="text" placeholder="Subject *" name="subject" />
                  </div>
                  <div className="col-12 max-mb-30">
                    <textarea
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 text-center max-mb-30">
                    <button className="btn btn-primary btn-hover-secondary btn-width-180 btn-height-60">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-messege" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
