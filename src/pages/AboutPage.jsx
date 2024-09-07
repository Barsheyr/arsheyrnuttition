import React from "react";
import { aboutHero } from "../assets/images";
import { OurStory, AboutAchievement } from "../components";

const AboutPage = () => {
  return (
    <section className="align-element">
      <div className="py-20">
        <img src={aboutHero} alt="" />
      </div>

      <div className="flex flex-col text-center items-center space-y-10 py-20 bg-green95 lg:p-10 px-5 border rounded-md">
        <h1 className="text-4xl font-bold">Welcome to Nutritionist</h1>
        <p className="text-sm">
          Your trusted source for personalized nutrition coaching. Our mission
          is to help you achieve your weight loss and health goals through
          tailored nutrition plans and expert guidance. We understand that every
          individual is unique, and that's why we believe in providing
          personalized solutions that fit your lifestyle and preferences. With
          our team of qualified nutritionists and dietitians, we are dedicated
          to empowering you with the knowledge and tools you need to make
          lasting changes. Whether you want to shed those extra pounds, improve
          your overall well-being, or develop a healthier relationship with
          food, we are here to support you every step of the way. At
          Nutritionist, we believe that healthy eating should be enjoyable and
          sustainable. We emphasize the importance of balanced nutrition,
          focusing on whole foods and mindful eating practices. Our approach is
          rooted in scientific research and evidence-based strategies, ensuring
          that you receive the most up-to-date and accurate information. Join
          our community of individuals committed to transforming their lives
          through nutrition. Take control of your health, boost your energy
          levels, and discover the joy of nourishing your body with wholesome
          foods. We are here to guide you towards a healthier, happier you.{" "}
        </p>
      </div>
      <OurStory />
      <AboutAchievement />

      {/* call to action */}
      <div className="bg-green90 lg:p-20 p-10 rounded-lg">
        <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">
              We Are Proud of Our Achievements
            </h1>
            <p className="font-normal text-base lg:pr-[20%] text-grey35">
              But our ultimate satisfaction comes from seeing our clients
              achieve their goals and live healthier, happier lives. Join
              Nutritionist today and embark on your own transformative journey
              towards optimal health and well-being.
            </p>
          </div>
          <div className="btn border-none bg-darkGreen15 text-white mt-5 hover:bg-green70 hover:text-black">
            <p>Join Now </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
