import React from "react";

const Maincontent = () => {
  return (
    <div className="section section-padding-bottom fix">
      <div className="container">
        {/* Blog Wrapper Start */}
        <div className="row row-cols-1 no-gutters">
          {/* Blog Start */}
          <div className="blog-3 col" data-aos="fade-up">
            <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">
              <div className="col max-mb-30">
                <div className="thumbnail">
                  <a href="blog-details.html" className="image">
                    <img
                      src="assets/images/blog/540/blog-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
              </div>
              <div className="col max-mb-30">
                <div className="info pt-0">
                  <h3 className="title">
                    <a href="blog-details.html">
                      10 Essential Bodyweight Exercises
                    </a>
                  </h3>
                  <ul className="meta">
                    <li>
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/blog-avatar.jpg"
                          alt
                          className="avatar"
                        />
                        Owen Christ
                      </a>
                    </li>
                    <li>
                      <i className="far fa-calendar" />
                      Apr 06, 2020
                    </li>
                    <li>
                      <i className="far fa-eye" />
                      70 views
                    </li>
                  </ul>
                  <div className="desc">
                    <p>
                      Essential bodyweight exercises are crucial to a
                      well-rounded training routine because they’re versatile
                      and can be done anywhere. …
                    </p>
                  </div>
                  <div className="row justify-content-between max-mt-30">
                    <div className="col-auto">
                      <a
                        href="blog-details.html"
                        className="btn btn-primary btn-hover-secondary"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="col-auto">
                      <div className="post-share">
                        <span className="label">Share this post</span>
                        <div className="media">
                          <span className="icon">
                            <i className="fas fa-share-alt" />
                          </span>
                          <div className="list">
                            <a href="JavaScript:Void(0);">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="JavaScript:Void(0);">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="JavaScript:Void(0);">
                              <i className="fab fa-linkedin" />
                            </a>
                            <a href="JavaScript:Void(0);">
                              <i className="fab fa-tumblr-square" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Blog End */}
        </div>
        {/* Blog Wrapper End */}
        {/* Pagination Start */}
        <div className="row">
          <div className="col">
            <ul className="pagination center">
              <li>
                <a href="#" className="prev">
                  PREV
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#" className="next">
                  NEXT
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Pagination End */}
      </div>
    </div>
  );
};

export default Maincontent;
