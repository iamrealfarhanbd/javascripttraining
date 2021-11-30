import { useEffect } from "react";
import Commentlist from "./Commentlist";
import Commentsform from "./Commentsform";
import Popularposts from "./Popularposts";
import Populartags from "./Populartags";
import Searchbox from "./Searchbox";

const Maincontent = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="section section-padding-bottom fix">
      <div className="container">
        <div className="row max-mb-n50">
          <div className="col-lg-8 col-12 order-lg-2 max-mb-50">
            {/* Blog Wrapper Start */}
            <div className="row row-cols-1 no-gutters">
              {/* Blog Start */}
              <div className="blog-3 blog-details col" data-aos="fade-up">
                <div className="thumbnail">
                  <img
                    src="assets/images/blog/770/blog-1.jpg"
                    alt="Blog Image"
                  />
                </div>
                <div className="info">
                  <a href="#" className="category">
                    Gym Coaching
                  </a>
                  <h3 className="title">10 Essential Bodyweight Exercises</h3>
                  <ul className="meta">
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/blog/blog-avatar.jpg"
                          alt=""
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
                      Paging through a photo album detailing every moment of a
                      friend’s poolside vacation might not be a riveting
                      activity, but flipping through Angela Mckay’s sketchbooks
                      filled with tiny paintings of her travels certainly is.
                      The Brooklyn-based pattern designer and illustrator
                      of&nbsp;<a href="#">Ohkii Studio</a>&nbsp;documents the
                      lush scenery, cavernous waters, and hilly villages she
                      sees on the streets of Lagos, Calamosche Beach on Italy’s
                      southern coast, and in Joshua Tree National Park. Mckay
                      generally positions her miniature paintings against the
                      real-life backdrop, juxtaposing the two depictions that
                      she then shares on&nbsp;<a href="#">Instagram</a>.
                    </p>
                    <p>
                      The artist tells Colossal that she frequently recreates
                      some of the pieces in her sketchbooks on a larger scale
                      after returning home, relying on her earlier
                      representation for the tiny details she otherwise might
                      not remember. “Often when I’m traveling, I have this
                      urgent feeling that I need to capture everything I’m
                      experiencing, the sights, feelings and textures of a
                      place,” she says.
                    </p>
                    <blockquote className="block-quote">
                      <p>
                        I really enjoy that feeling of walking around a new
                        place not knowing what I might discover around the
                        corner. I often try to recreate the feeling of a place I
                        have visited in my personal work… I really enjoy the
                        experience of looking at a painting and being
                        transported back to that experience. It’s a nice way to
                        escape from your day to day!
                      </p>
                    </blockquote>
                    <p>
                      The pocket-size notebooks are a crucial component of
                      Mckay’s process, and she utilizes them in both her
                      personal projects and her work for clients. “They just
                      allow me to play with ideas and explore other directions
                      without having to commit to anything,” she says. To pick
                      up one of Mckay’s watercolor and gouache&nbsp;
                      <a href="#">artworks</a>
                      <a href="#">prints</a>, head to her shop. (via&nbsp;
                      <a href="#">Lustik</a>)
                    </p>
                    <p>Source: thisiscolossal.com</p>
                  </div>
                  <div className="row justify-content-between align-items-center max-mt-50">
                    <div className="col-auto">
                      <div className="entry-post-tags">
                        <div className="tag-label">
                          <span className="tag-icon far fa-tags" />
                        </div>
                        <div className="tag">
                          <a href="#">artist, </a>
                          <a href="#">education</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="post-share">
                        <span className="label">Share this post</span>
                        <div className="media">
                          <span className="icon">
                            <i className="fas fa-share-alt" />
                          </span>
                          <div className="list">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                            <a href="#">
                              <i className="fab fa-tumblr-square" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog End */}
              <div className="entry-author">
                <div className="author-info">
                  <div className="author-avatar">
                    <img src="assets/images/author/blog-author.jpg" alt="" />
                    <div className="author-social-networks">
                      <div className="inner">
                        <a
                          className="hint--bounce hint--top hint--primary"
                          aria-label="Twitter"
                          href="#"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          className="hint--bounce hint--top hint--primary"
                          aria-label="Facebook"
                          href="#"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          className="hint--bounce hint--top hint--primary"
                          aria-label="Instagram"
                          href="#"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="author-description">
                    <h6 className="author-name">Owen Christ</h6>
                    <div className="author-biographical-info">
                      Owen Christ is an author, blogger, and designer living in
                      a suburb of Washington, DC. When she’s not designing,
                      blogging, or writing, Owen can be found with her head in a
                      book or pinning like a madman.
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-nav-links">
                <div className="nav-list">
                  <div className="nav-item prev">
                    <div className="inner">
                      <a href="#">
                        <div
                          className="hover-bg has-thumbnail"
                          data-bg-image="./assets/images/pagination/blog-pagination.jpg"
                        />
                        <h6>Connection Between Self-Portraits and Identity</h6>
                      </a>
                    </div>
                  </div>
                  <div className="nav-item next">
                    <div className="inner">
                      <a href="#">
                        <div
                          className="hover-bg has-thumbnail"
                          data-bg-image="./assets/images/pagination/blog-pagination-2.jpg"
                        />
                        <h6>Brush Strokes Energize Trees in Paintings</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Commentlist />
              <div className="comment-form-wrap">
                <Commentsform />
              </div>
            </div>
            {/* Blog Wrapper End */}
          </div>
          <div className="col-lg-4 col-12 order-lg-1 max-mb-50">
            <div className="sidebar-widget-wrapper">
              <div className="sidebar-widget">
                <Searchbox />
              </div>
              <Popularposts />
              <div className="sidebar-widget">
                <Populartags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
