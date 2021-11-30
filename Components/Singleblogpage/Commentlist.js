const Commentlist = () => {
  return (
    <div className="section section-padding-bottom fix">
      <div className="container">
        <div className="row max-mb-n50">
          <div className="col-lg-8 col-12 order-lg-2 max-mb-50">
            {/* Blog Wrapper Start */}
            <div className="row row-cols-1 no-gutters">
              <div className="comment-list-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="title">
                      Commentssss <span>(3)</span>{" "}
                    </h4>
                  </div>
                  <div className="col-lg-12">
                    <ol className="comment-list">
                      <li className="comment border-bottom">
                        <div className="comment-2">
                          <div className="comment-author vcard">
                            <img
                              alt=""
                              src="assets/images/comment/comment1.jpeg"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="meta">
                              <h6 className="fn">Edna Watson</h6>
                            </div>
                            <div className="comment-text">
                              <p>
                                Thanks for always keeping your HTML Template up
                                to date. Your level of support and dedication is
                                second to none.
                              </p>
                            </div>
                            <div className="comment-actions">
                              <div className="comment-datetime">
                                {" "}
                                November 16, 2018 at 4:31 am{" "}
                              </div>
                              <span> | </span>
                              <a className="comment-reply-link" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* comment End*/}
                      <li className="comment border-bottom">
                        <div className="comment-2">
                          <div className="comment-author vcard">
                            <img
                              alt=""
                              src="assets/images/comment/comment2.jpeg"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="meta">
                              <h6 className="fn">Owen Christ</h6>
                            </div>
                            <div className="comment-text">
                              <p>
                                Thanks for always keeping your HTML Template up
                                to date. Your level of support and dedication is
                                second to none.
                              </p>
                            </div>
                            <div className="comment-actions">
                              <div className="comment-datetime">
                                {" "}
                                November 19, 2018 at 4:31 am{" "}
                              </div>
                              <span> | </span>
                              <a className="comment-reply-link" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* comment End*/}
                      <li className="comment">
                        <div className="comment-5">
                          <div className="comment-author vcard">
                            <img
                              alt=""
                              src="assets/images/comment/comment1.jpeg"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="meta">
                              <h6 className="fn">James Scott</h6>
                              <div className="comment-datetime">
                                November 13, 2018 at 4:50 am{" "}
                              </div>
                            </div>
                            <div className="comment-text">
                              <p>
                                Thanks for always keeping your HTML Template up
                                to date. Your level of support and dedication is
                                second to none.
                              </p>
                            </div>
                            <div className="comment-actions">
                              <div className="comment-datetime">
                                {" "}
                                February 12, 2018 at 6:31 am{" "}
                              </div>
                              <span> | </span>
                              <a className="comment-reply-link" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        <ol className="children">
                          <li className="comment ">
                            <div className="comment-6">
                              <div className="comment-author vcard">
                                <img
                                  alt=""
                                  src="assets/images/comment/comment3.jpeg"
                                />
                              </div>
                              <div className="comment-content">
                                <div className="meta">
                                  <h6 className="fn">Harry Ferguson</h6>
                                  <div className="comment-datetime">
                                    February 13, 2019 at 4:51 am{" "}
                                  </div>
                                </div>
                                <div className="comment-text">
                                  <p>
                                    Thanksssss for always keeping your HTML
                                    Template up to date. Your level of support
                                    and dedication is second to none.
                                  </p>
                                </div>
                                <div className="comment-actions">
                                  <div className="comment-datetime">
                                    {" "}
                                    November 13, 2018 at 4:31 am{" "}
                                  </div>
                                  <span> | </span>
                                  <a className="comment-reply-link" href="#">
                                    Reply
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          {/* comment End */}
                        </ol>
                        {/* children End */}
                      </li>
                      {/* comment End*/}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Wrapper End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentlist;
