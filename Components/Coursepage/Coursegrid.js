import { useEffect } from "react";
import Coursecard from "./Coursecard";
const Coursegrid = () => {
  useEffect(() => {
    AOS.init();
  });
  const cards = [
    {
      id: "1",
      img: "assets/images/courses/370/course-2.jpg",
    },
    {
      id: "2",
      img: "assets/images/courses/370/course-2.jpg",
    },
    {
      id: "3",
      img: "assets/images/courses/370/course-2.jpg",
    },
  ];
  return (
    <div className="section section-padding-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center max-mb-20">
          <div className="col-sm-auto col-12 max-mb-10">
            <p className="result-count">
              We found <span>22</span> courses available for you
            </p>
          </div>
          <div className="col-sm-auto col-12 max-mb-10">
            <select className="sort-by">
              <option selected="selected">Default</option>
              <option value="popularity">Popularity</option>
              <option value="date">Latest</option>
              <option value="price">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
          {cards.map((card) => {
            return <Coursecard card={card} key={card.id} />;
          })}
        </div>
        <div className="row max-mt-50">
          <div className="col text-center">
            <a
              href="JavaScript:Void(0);"
              className="btn btn-outline-primary load-more-btn"
            >
              Load More <i className="fal fa-redo ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursegrid;
