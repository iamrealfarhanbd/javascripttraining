import {useEffect} from 'react';

const Header = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (

          
                <div className="header-section header-transparent sticky-header section">
                  <div className="header-inner">
                    <div className="container position-relative">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-auto">
                          <div className="header-logo">
                            <a href="index.html">
                              <img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Learts Logo" />
                              <img className="light-logo" src="assets/images/logo/light-logo.png" alt="Learts Logo" />
                            </a>
                          </div>
                        </div>
                        <div className="col d-none d-xl-block position-static">
                          <nav className="site-main-menu menu-hover-1">
                            <ul>
                              <li className="has-children position-static">
                                <a href="#"><span className="menu-text">Home</span></a>
                                <span className="menu-toggle"><i className="far fa-angle-down" /></span>
                                <ul className="mega-menu">
                                  <li>
                                    <ul>
                                      <li><a href="index.html"><span className="menu-text">MaxCoach Education <span className="badge">Hot</span></span></a></li>
                                      <li><a href="index-2.html"><span className="menu-text">Course Portal</span></a></li>
                                      <li><a href="index-3.html"><span className="menu-text">Distant Learning <span className="badge">Hot</span></span></a></li>
                                      <li><a href="index-4.html"><span className="menu-text">Multimedia Pedagogy</span></a></li>
                                      <li><a href="index-5.html"><span className="menu-text">Modern Schooling</span></a></li>
                                      <li><a href="index-6.html"><span className="menu-text">Remote Training</span></a></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <ul>
                                      <li><a href="index-7.html"><span className="menu-text">Health Coaching</span></a></li>
                                      <li><a href="index-8.html"><span className="menu-text">Gym Coaching</span></a></li>
                                      <li><a href="index-9.html"><span className="menu-text">Business</span></a></li>
                                      <li><a href="index-10.html"><span className="menu-text">Artist <span className="badge primary">New</span></span></a></li>
                                      <li><a href="index-11.html"><span className="menu-text">Kitchen Coach <span className="badge primary">New</span></span></a></li>
                                      <li><a href="index-12.html"><span className="menu-text">Motivation <span className="badge primary">New</span></span></a></li>
                                    </ul>
                                  </li>
                                  <li className="menu-item-50">
                                    <ul>
                                      <li><a href="#"><img src="assets/images/menu/mega-menu.jpg" alt="menu-image" /></a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-children">
                                <a href="#"><span className="menu-text">Pages</span></a>
                                <span className="menu-toggle"><i className="far fa-angle-down" /></span>
                                <ul className="sub-menu">
                                  <li><a href="start-here.html"><span className="menu-text">Start Here</span></a></li>
                                  <li><a href="success-story.html"><span className="menu-text">Success Story</span></a></li>
                                  <li><a href="about-me.html"><span className="menu-text">About me</span></a></li>
                                  <li><a href="about-us-1.html"><span className="menu-text">About us 01</span></a></li>
                                  <li><a href="about-us-2.html"><span className="menu-text">About us 02</span></a></li>
                                  <li><a href="about-us-3.html"><span className="menu-text">About us 03</span></a></li>
                                  <li><a href="contact-me.html"><span className="menu-text">Contact me</span></a></li>
                                  <li><a href="contact-us.html"><span className="menu-text">Contact us</span></a></li>
                                  <li><a href="purchase-guide.html"><span className="menu-text">Purchase Guide</span></a></li>
                                  <li><a href="privacy-policy.html"><span className="menu-text">Privacy Policy</span></a></li>
                                  <li><a href="terms-of-service.html"><span className="menu-text">Terms of Service</span></a></li>
                                </ul>
                              </li>
                              <li className="has-children">
                                <a href="#"><span className="menu-text">Courses</span></a>
                                <span className="menu-toggle"><i className="far fa-angle-down" /></span>
                                <ul className="sub-menu">
                                  <li><a href="courses-grid-1.html"><span className="menu-text">Courses Grid 01</span></a></li>
                                  <li><a href="courses-grid-2.html"><span className="menu-text">Courses Grid 02</span></a></li>
                                  <li><a href="courses-grid-3.html"><span className="menu-text">Courses Grid 03</span></a></li>
                                  <li><a href="membership-levels.html"><span className="menu-text">Membership Levels</span></a></li>
                                  <li><a href="become-a-teacher.html"><span className="menu-text">Become a Teacher</span></a></li>
                                  <li><a href="profile.html"><span className="menu-text">Profile</span></a></li>
                                  <li><a href="checkout.html"><span className="menu-text">Checkout</span></a></li>
                                  <li className="has-children">
                                    <a href="course-details-sticky-feature-bar.html"><span className="menu-text">Single Layout</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down" /></span>
                                    <ul className="sub-menu">
                                      <li><a href="course-details-free.html"><span className="menu-text">Free Course</span></a></li>
                                      <li><a href="course-details-sticky-feature-bar.html"><span className="menu-text">Sticky Features Bar</span></a></li>
                                      <li><a href="course-details-standard-sidebar.html"><span className="menu-text">Standard Sidebar</span></a></li>
                                      <li><a href="course-details-no-sidebar.html"><span className="menu-text">No Sidebar</span></a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-children">
                                <a href="#"><span className="menu-text">Event</span></a>
                                <span className="menu-toggle"><i className="far fa-angle-down" /></span>
                                <ul className="sub-menu">
                                  <li><a href="event.html"><span className="menu-text">Event</span></a></li>
                                  <li><a href="zoom-meetings.html"><span className="menu-text">Zoom Meetings</span></a></li>
                                  <li><a href="event-details.html"><span className="menu-text">Event Details</span></a></li>
                                  <li><a href="zoom-event-details.html"><span className="menu-text">Zoom Meeting Details</span></a></li>
                                </ul>
                              </li>
                              <li className="has-children">
                                <a href="#"><span className="menu-text">Blog</span></a>
                                <span className="menu-toggle"><i className="far fa-angle-down" /></span>
                                <ul className="sub-menu">
                                  <li><a href="blog-grid.html"><span className="menu-text">Blog Grid</span></a></li>
                                  <li><a href="blog-masonry.html"><span className="menu-text">Blog Masonry</span></a></li>
                                  <li><a href="blog-classic.html"><span className="menu-text">Blog Classic</span></a></li>
                                  <li><a href="blog-list.html"><span className="menu-text">Blog List</span></a></li>
                                </ul>
                              </li>
                              <li className="has-children">
                                <a href="#"><span className="menu-text">Shop</span></a>
                                <span className="menu-toggle"><i className="far fa-angle-down" /></span>
                                <ul className="sub-menu">
                                  <li><a href="shop.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                                  <li><a href="shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                                  <li><a href="shopping-cart.html"><span className="menu-text">Cart</span></a></li>
                                  <li><a href="shopping-cart-empty.html"><span className="menu-text">Cart Empty</span></a></li>
                                  <li><a href="wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                                  <li><a href="product-details.html"><span className="menu-text">Single Product</span></a></li>
                                  <li><a href="my-account.html"><span className="menu-text">My Account</span></a></li>
                                  <li><a href="login-register.html"><span className="menu-text">Login Register</span></a></li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="col-xl-3 col-auto">
                          <div className="header-right">
                            <div className="inner">
                              {/* Header Cart Start */}
                              <div className="header-cart">
                                <a className="header-cart-btn" href="shopping-cart.html"><span className="cart-count">2</span><i className="far fa-shopping-cart" /></a>
                                {/* Header Mini Cart Start */}
                                <div className="header-mini-cart">
                                  <div className="inner">
                                    {/* Header Mini Cart Product Start */}
                                    <div className="mini-cart-products">
                                      <div className="mini-cart-product">
                                        <a href="#" className="thumb"><img src="assets/images/products/mini-cart/product-1.jpg" alt="" /></a>
                                        <div className="content">
                                          <a href="#" className="title">Online Student: Strategies for Effective Learning</a>
                                          <span className="quantity">1 x <span className="price">$67.00</span></span>
                                        </div>
                                        <a href="#" className="remove"><i className="far fa-times" /></a>
                                      </div>
                                      <div className="mini-cart-product">
                                        <a href="#" className="thumb"><img src="assets/images/products/mini-cart/product-2.jpg" alt="" /></a>
                                        <div className="content">
                                          <a href="#" className="title">Principles of Business Administration</a>
                                          <span className="quantity">1 x <span className="price">$52.00</span></span>
                                        </div>
                                        <a href="#" className="remove"><i className="far fa-times" /></a>
                                      </div>
                                    </div>
                                    {/* Header Mini Cart Product End */}
                                    {/* Header Mini Cart Footer Start */}
                                    <div className="mini-cart-footer">
                                      <div className="mini-cart-total">
                                        <b>Total:</b>
                                        <span className="amount">$119.00</span>
                                      </div>
                                      <div className="mini-cart-buttons">
                                        <a href="shopping-cart.html" className="btn btn-primary btn-hover-secondary">View Cart</a>
                                        <a href="checkout.html" className="btn btn-primary btn-hover-secondary">Checkout</a>
                                      </div>
                                    </div>
                                    {/* Header Mini Cart Footer End */}
                                  </div>
                                </div>
                                {/* Header Mini Cart End */}
                              </div>
                              {/* Header Cart End */}
                              {/* Header Login Start */}
                              <div className="header-login">
                                <a href="profile.html"><i className="far fa-user-circle" /></a>
                              </div>
                              {/* Header Login End */}
                              {/* Header Search Start */}
                              <div className="header-search">
                                <button className="header-search-toggle"><i className="far fa-search" /></button>
                                <div className="header-search-form light">
                                  <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button><i className="fas fa-search" /></button>
                                  </form>
                                </div>
                              </div>
                              {/* Header Search End */}
                              {/* Header Mobile Menu Toggle Start */}
                              <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                <button className="toggle">
                                  <i className="icon-top" />
                                  <i className="icon-middle" />
                                  <i className="icon-bottom" />
                                </button>
                              </div>
                              {/* Header Mobile Menu Toggle End */}
                            </div>
                          </div>
                        </div>
                        {/* Header Right End */}
                      </div>
                    </div>
                  </div>
                </div>

    )
}

export default Header
