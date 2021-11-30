import React from "react";
import Breadcrumb from "../Components/Contactpage/Breadcrumb";
import Contactform from "../Components/Contactpage/Contactform";
import Contactinfo from "../Components/Contactpage/Contactinfo";
import Map from "../Components/Contactpage/map";

const contact = () => {
  return (
    <>
      <Breadcrumb />
      <Contactinfo />
      <Map />
      <Contactform />
    </>
  );
};

export default contact;
