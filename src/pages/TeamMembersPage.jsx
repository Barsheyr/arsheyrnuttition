import React, { useState } from "react";
import { TeamIcon } from "../assets/images";
import Tabs from "../components/TeamMembers/Tabs";

const TeamMembersPage = () => {
  return (
    <section className="align-element font-primary">
      <div>
        <div className="mt-20 flex flex-col text-center items-center space-y-10 py-20 bg-green95 p-10 border rounded-md bg-over">
          <div className="bg-overview">
            <img src={TeamIcon} alt="" />
          </div>
          <h1 className="text-5xl font-bold"> Meet Our Team Members</h1>
          <p>
            Our team at Nutritionist is composed of highly skilled professionals
            who are passionate about helping you achieve your health and
            wellness goals. With a diverse range of expertise in nutrition,
            coaching, and support, our team is dedicated to providing you with
            the guidance and personalized care you need. Get to know the experts
            behind our success and discover how they can make a positive impact
            on your journey to better health.
          </p>
        </div>

        <div>
          <Tabs />
        </div>
        {/* call to action */}
        <div className="bg-green90 p-20 rounded-lg my-20">
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
            <div className="btn border-none bg-darkGreen20 hover:bg-green70 text-white mt-5 hover:bg-orange70">
              <p>Join Now </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersPage;
