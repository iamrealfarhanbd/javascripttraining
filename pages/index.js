import Footer from "../Components/Footer";
import Blog from "../Components/Homepage/Blog";
import Course from "../Components/Homepage/Course";
import Cta from "../Components/Homepage/Cta";
import Downloadapp from "../Components/Homepage/Downloadapp";
import Faq from "../Components/Homepage/Faq";
import Feature from "../Components/Homepage/Feature";
import Funfact from "../Components/Homepage/Funfact";
import Hero from "../Components/Homepage/Hero";
import Register from "../Components/Homepage/Register";
import Testimonial from "../Components/Homepage/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Faq />
      <Funfact />
      <Course />
      <Register />
      <Downloadapp />
      <Blog />
      <Testimonial />
      <Cta />
    </div>
  );
}
