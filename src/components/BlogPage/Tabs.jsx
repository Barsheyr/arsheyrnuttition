import React, { useState } from "react";
import Team1 from "../../assets/images/Team1.jpg";
import Team2 from "../../assets/images/Team2.jpg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "All",
      content: "Content for Tab 1",
      Title: "Weight Loss Tips",
      Header: "10 Effective Strategies for Sustainable Weight Loss",
      Header2: "The Role of Portion Control in Weight Management",
      Header3: "10 Effective Strategies for Sustainable Weight Loss",
      Header4: "10 Effective Strategies for Sustainable Weight Loss",
      Header5: "10 Effective Strategies for Sustainable Weight Loss",
      Description:
        "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.",
      Description2:
        "Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating.",
      Description3:
        "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.",
      Description4:
        "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.",
      Img1: Team1,
      Img2: Team2,
    },
    {
      id: 1,
      label: "Weight Loss Tips",
      content: "Content for Tab 2",
      Image: Team1,
      Description:
        "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.",
      Description2:
        "Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating.",
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
                  className="text-gray-700 grid lg:grid-cols-2 grid-cols-1"
                >
                  <div className="flex flex-col border border-green70 p-5">
                    <p className="font-semibold text-xl mb-5"> {tab.Title} </p>
                    <img src={tab.Img1} alt="" className="self-end" />
                    <div className="flex items-center justify-between py-10">
                      <div className="space-y-5">
                        <h1 className="font-bold text-2xl">{tab.Header}</h1>
                        <p className=""> {tab.Description} </p>
                      </div>
                      <div className="btn btn-md"> Read Now</div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col border border-green70 p-5">
                    <p className="font-semibold text-xl mb-5"> {tab.Title} </p>
                    <img src={tab.Img1} alt="" className="self-end" />
                    <div className="flex items-center justify-between py-10">
                      <div className="space-y-5">
                        <h1 className="font-bold text-2xl">{tab.Header2}</h1>
                        <p className=""> {tab.Description2} </p>
                      </div>
                      <div className="btn btn-md"> Read Now</div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="flex flex-col border border-green70 p-5">
                    <p className="font-semibold text-xl mb-5"> {tab.Title} </p>
                    <img src={tab.Img2} alt="" className="self-end" />
                    <div className="flex items-center justify-between py-10">
                      <div className="space-y-5">
                        <h1 className="font-bold text-2xl">{tab.Header2}</h1>
                        <p className=""> {tab.Description3} </p>
                      </div>
                    </div>
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
