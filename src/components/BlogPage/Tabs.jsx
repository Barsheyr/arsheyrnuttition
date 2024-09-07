import React, { useState } from "react";
import Team1 from "../../assets/images/Team1.jpg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "All",
      content: "Content for Tab 1",
      Role: "Chief Marketing Officer",
      Img1: Team1,
    },
    {
      id: 1,
      label: "Weight Loss Tips",
      content: "Content for Tab 2",
      Img1: Team1,
      Role: "Chief Marketing Officer",
    },
    {
      id: 2,
      label: "Healthy Eatings",
      content: "Content for Tab 3",
      Img1: Team1,
      Role: "Chief Financial Officer",
    },
    {
      id: 3,
      label: "Fitness and Exercise",
      Img1: Team1,
      Role: "Chief Operating Officer",
    },
    {
      id: 4,
      label: "Mindset and Motivation",
      Img1: Team1,
      Role: "Founder and CEO",
    },
    {
      id: 5,
      label: "Recipes and Meal Planning",
      Img1: Team1,
      Role: "Founder and CEO",
    },
  ];

  return (
    <section className="">
      <div className="w-full container mx-auto">
        {/* Tab Buttons */}
        <div className="flex lg:flex-row flex-col bg-darkGreen15 p-5 rounded-b-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-2 text-center text-sm gap-10 ${
                activeTab === tab.id
                  ? "border-2 border-green-200 text-green70 gap-5 rounded-md"
                  : "text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 bg-green95 mt-10">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div
                  key={tab.id}
                  className="text-gray-700 grid lg:grid-cols-4 grid-cols-1 gap-20"
                >
                  <div className="relative">
                    <img src={tab.Img1} alt="" className="" />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
