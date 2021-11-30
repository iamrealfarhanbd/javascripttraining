import React from "react";

const Cta = () => {
  return (
    <div
      className="cta-section section section-padding"
      data-bg-color="#f5f5f5"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-content text-center">
              <span className="sub-title">
                Start today for getting <span>Online Certification</span>
              </span>
              <h2 className="title">
                You can be your own guiding star with our help!
              </h2>
              <a
                href="JavaScript:Void(0);"
                className="btn btn-primary btn-hover-secondary btn-width-300"
              >
                {" "}
                Get started for free
              </a>
              {/* Animation Shape Start */}
              <div className="shape shape-1 scene">
                <span data-depth={4}>shape 1</span>
              </div>
              <div className="shape shape-2 scene">
                <span data-depth={4}>
                  <img
                    src="assets/images/shape-animation/cta-shape-01.png"
                    alt
                  />
                </span>
              </div>
              <div className="shape shape-3 scene">
                <span data-depth={4}>
                  <img
                    src="assets/images/shape-animation/nwesletter-shape-2.png"
                    alt
                  />
                </span>
              </div>
              {/* Animation Shape End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
