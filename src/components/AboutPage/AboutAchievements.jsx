import React from "react";
import { CompanyAchievements } from "../../data";

const AboutAchievements = () => {
  return (
    <section className="align-element mt-44">
      <div className="text-center space-y-5">
        <h1 className="text-6xl font-semibold"> Company Achievements </h1>
        <p className="lg:px-32">
          At Nutritionist, we take pride in our accomplishments and the positive
          impact we have made on the lives of our clients. Here are some of our
          notable achievements
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 py-20">
        {CompanyAchievements.map((CompanyAchievement) => {
          const { id, H1, P1 } = CompanyAchievement;

          return (
            <div key={id}>
              <div className="bg-green90 p-10 rounded-lg grid grid-rows-2">
                <h3 className="text-grey15 font-medium text-2xl">{H1}</h3>
                <p>{P1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutAchievements;
