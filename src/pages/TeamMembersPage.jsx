import React from "react";
import { TeamIcon } from "../assets/images";

const TeamMembersPage = () => {
  return (
    <section className="align-element">
      <div>
        <div className="flex flex-col text-center items-center space-y-10 py-20 bg-green95 p-10 border rounded-md bg-over my-20">
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
      </div>
    </section>
  );
};

export default TeamMembersPage;
