import React from "react";

const Contactinfo = () => {
  return (
    <div className="contact-information-section section section-padding-bottom">
      <div className="container">
        <div className="row margin-bottom-85">
          <div className="col-12">
            <div className="contact-title max-width-740">
              <h2 className="title">
                For more information about our courses, get in touch with
                MaxCoach via contacts
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-30 row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
          <div className="col max-mb-30">
            {/* Single Contact Info Start */}
            <div className="contact-info">
              <div className="icon">
                <i className="fal fa-map-marker-alt" />
              </div>
              <div className="info">
                <h4 className="title"> Address</h4>
                <span className="info-text">
                  {" "}
                  1800 Abbot Kinney Blvd. Unit D &amp; E Venice
                </span>
              </div>
            </div>
            {/* Single Contact Info End */}
          </div>
          <div className="col max-mb-30">
            {/* Single Contact Info Start */}
            <div className="contact-info">
              <div className="icon">
                <i className="fal fa-phone" />
              </div>
              <div className="info">
                <h4 className="title"> Contact</h4>
                <span className="info-text">
                  {" "}
                  Mobile: <strong>(+88) - 1990 - 6886</strong>
                  <br />
                  Hotline: <strong>1800 – 1102</strong>
                  <br />
                  Mail:{" "}
                  <a href="mailto:hello@hasthemes.com">hello@hasthemes.com</a>
                </span>
              </div>
            </div>
            {/* Single Contact Info End */}
          </div>
          <div className="col max-mb-30">
            {/* Single Contact Info Start */}
            <div className="contact-info">
              <div className="icon">
                <i className="fal fa-clock" />
              </div>
              <div className="info">
                <h4 className="title"> Hour of operation</h4>
                <span className="info-text">
                  {" "}
                  Monday – Friday : 09:00 – 20:00 <br /> Sunday &amp; Saturday:
                  10:30 – 22:00
                </span>
              </div>
            </div>
            {/* Single Contact Info End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
