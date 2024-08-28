import React from "react";
import { Hero, Features, Blog } from "../components";
import Testimonials from "../components/Hero/Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Blog />
      <Testimonials />
    </>
  );
};

export default Landing;
