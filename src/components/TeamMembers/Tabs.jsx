import React, { useState } from "react";
import Team1 from "../../assets/images/Team1.jpg";
import Team2 from "../../assets/images/Team2.jpg";
import Team3 from "../../assets/images/Team3.jpg";
import Team4 from "../../assets/images/Team4.jpg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Management Team",
      content: "Content for Tab 1",
      Img1: Team1,
      Img3: Team3,
      Img2: Team2,
      Img4: Team4,
      Name1: "Zark Cody",
      Name2: "Coastas Tsimi ",
      Name3: "James Raphael",
      Name4: "Christian Jackson",
      Role: "Chief Marketing Officer",
    },
    {
      id: 1,
      label: "Nutritionists and Dentists",
      content: "Content for Tab 2",
      Img1: Team1,
      Img3: Team3,
      Img2: Team2,
      Img4: Team4,
      Name1: "Mo Trent",
      Name2: "Son Solanke",
      Name3: "Nkunku Palmer",
      Name4: "Stephen Quansah",
      Role: "Chief Marketing Officer",
    },
    {
      id: 2,
      label: "Customer Support",
      content: "Content for Tab 3",
      Img1: Team1,
      Img3: Team3,
      Img2: Team2,
      Img4: Team4,
      Name1: "Saka Ode",
      Name2: "Kai Partey",
      Name3: "Leo Raya",
      Name4: "Zubi Szobo",
      Role: "Chief Financial Officer",
    },
    {
      id: 3,
      label: "Marketing and Communications",
      Img1: Team1,
      Img3: Team3,
      Img2: Team2,
      Img4: Team4,
      Name1: "Emily Thompson",
      Name2: "Erling Green ",
      Name3: "Ilkay Doku",
      Name4: "Juan Jack",
      Role: "Chief Operating Officer",
    },
    {
      id: 4,
      label: "Technology and Development",
      Img1: Team1,
      Img2: Team2,
      Img3: Team3,
      Img4: Team4,
      Name1: "Robert Kylian",
      Name2: "Darwin Olmo",
      Name3: "Yamine Fede",
      Name4: "Becker Dashvilli",
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
                    <div className="bg-green95 rounded-r-lg absolute -bottom-10 shadow-sm lg:py-5 lg:px-5">
                      <p className="font-semibold lg:text-lg"> {tab.Name1} </p>
                      <p className=""> {tab.Role} </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img src={tab.Img2} alt="" className="" />
                    <div className="bg-green95 rounded-r-lg absolute -bottom-10 shadow-sm lg:py-5 lg:px-5">
                      <p className="font-semibold lg:text-lg"> {tab.Name2} </p>
                      <p className=""> {tab.Role} </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img src={tab.Img3} alt="" />
                    <div className="bg-green95 rounded-r-lg absolute -bottom-10 shadow-sm lg:py-5 lg:px-5">
                      <p className="font-semibold lg:text-lg"> {tab.Name3} </p>
                      <p className=""> {tab.Role} </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img src={tab.Img4} alt="" />
                    <div className="bg-green95 rounded-r-lg absolute -bottom-10 shadow-sm lg:py-5 lg:px-5">
                      <p className="font-semibold lg:text-lg"> {tab.Name4} </p>
                      <p className=""> {tab.Role} </p>
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
