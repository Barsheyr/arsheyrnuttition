import React from "react";
import { HeroImg } from "../../assets/images";
import { FaHeart } from "react-icons/fa";
import { heroPic1, heroPic2, heroPic3 } from "../../assets/images";

const Hero = () => {
  return (
    <div className="font-primary">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <img src={HeroImg} alt="" className="" />
        </div>

        <div className="flex flex-col justify-center space-y-5 lg:px-20 px-5 text-center lg:text-left">
          <h3 className="lg:text-2xl text-lg flex items-center justify-center lg:justify-start gap-3 font-semibold">
            Transform
            <span>
              <FaHeart color="red" />
            </span>
            Your Health with
          </h3>
          <h1 className="lg:text-6xl text-3xl font-bold">
            Personal Nutrition Coaching
          </h1>
          <p>
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>

          <div className="flex flex-row gap-5">
            <div className="btn bg-green75 border-none hover:bg-darkGreen40 hover:text-white">
              Get Started Today
            </div>
            <div className="btn bg-green90 border-none hover:bg-darkGreen40 hover:text-white">
              Book a Demo
            </div>
          </div>

          <div className=" flex flex-row items-center gap-10 pt-5">
            <div className="flex -space-x-5 border-2 border-darkGreen40 p-2 rounded-full">
              <img src={heroPic1} alt="" className="mix-blend-multiply" />
              <img src={heroPic2} alt="" className="mix-blend-multiply" />
              <img src={heroPic3} alt="" />
            </div>
            <h4 className="font-semibold">
              <span className="text-darkGreen30 font-bold"> 430+ </span> Happy
              Customers
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
