import React from "react";

const Map = () => {
  return (
    <div className="google-map-area section text-center">
      <div className="container">
        <div
          className="ht-gmap3"
          id="htmap2"
          data-height={500}
          data-width="100%"
          data-zoom_enable
          data-zoom={10}
          data-map_type="roadmap"
          data-map_style="style11"
        ></div>
      </div>
    </div>
  );
};

export default Map;
