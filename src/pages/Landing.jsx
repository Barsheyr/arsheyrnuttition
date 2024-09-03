import React from "react";
import { Hero, Features, Blog, Pricing } from "../components";
import Testimonials from "../components/Hero/Testimonials";

const Landing = () => {
  return (
    <div className="font-primary">
      <Hero />
      <Features />
      <Blog />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Landing;
