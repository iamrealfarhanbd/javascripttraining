import React from "react";
import Banner from "../Components/Aboutpage/Banner";
import Brand from "../Components/Aboutpage/Brand";

import Cta from "../Components/Aboutpage/Cta";
import Faq from "../Components/Aboutpage/Faq";
import Funfact from "../Components/Aboutpage/Funfact";
import Potentials from "../Components/Aboutpage/Potentials";
import Testimonial from "../Components/Aboutpage/Testimonial";

const about = () => {
  return (
    <>
      <Banner />
      <Funfact />
      <Faq />
      <Testimonial />
      <Brand />
      <Potentials />
      <Cta />
    </>
  );
};

export default about;
