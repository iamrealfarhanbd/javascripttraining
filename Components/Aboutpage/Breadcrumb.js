import React from "react";
import { useEffect } from "react";

const Breadcrumb = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="page-title-section section section-padding-top-0"
      data-bg-color="#f5f5f5"
    >
      <div className="page-breadcrumb position-static">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="current">About us 03</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
