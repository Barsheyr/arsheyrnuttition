import React, { useState } from "react";
import Team1 from "../../assets/images/blog1.jpg";
import Team2 from "../../assets/images/blog2.jpg";
import Team3 from "../../assets/images/blog3.jpg";
import Team4 from "../../assets/images/blog4.jpg";
import Team5 from "../../assets/images/blog5.jpg";
import Team6 from "../../assets/images/blog6.jpg";
import Team7 from "../../assets/images/blog7.jpg";
import Team8 from "../../assets/images/blog8.jpg";
import Team9 from "../../assets/images/blog9.jpg";
import Team10 from "../../assets/images/blog10.jpg";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Sample items
  const allItems = [
    {
      id: 1,
      type: "WeightLossTips",
      name: "First Weight Loss Tips",
      Img1: Team1,
      Description:
        "Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.",
      Title: "Weight Loss Tips",
      Header: "10 Effective Strategies for Sustainable Weight Loss",
    },
    {
      id: 2,
      type: "WeightLossTips",
      name: "Second Weight Loss Tips",
      Img1: Team2,
      Title: "Weight Loss Tips",
      Description:
        "Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating.",
      Header: "The Role of Portion Control in Weight Management",
    },
    {
      id: 3,
      type: "HealthyEatings",
      name: "HealthyEatings",
      Img1: Team3,
      Title: "HealthyEatings",
      Description:
        "Explore the advantages of adopting a plant-based diet. Learn about the potential health benefits, nutrient-rich plant-based foods, and tips for transitioning to a plant-based lifestyle.",
      Header: "The Benefits of a Plant-Based Diet for Overall Health",
    },
    {
      id: 4,
      type: "HealthyEatings",
      name: "HealthyEatings",
      Img1: Team4,
      Title: "Healthy Eatings",
      Description:
        "Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals.",
      Header: "Understanding Macronutrients: Carbohydrates, Proteins, and Fats",
    },
    {
      id: 5,
      type: "Fitness",
      name: "Fitness",
      Img1: Team5,
      Title: "Fitness and Exercise",
      Description:
        "Explore the benefits of both cardio and strength training exercises for weight loss. Find out how to combine them effectively to maximize your results.",
      Header: "Cardio vs. Strength Training: Which Is Better for Weight Loss?",
    },
    {
      id: 6,
      type: "Fitness",
      name: "Fitness",
      Img1: Team6,
      Title: "Fitness and Exercise",
      Description:
        "Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals.",
      Header: "Building a Home Workout Routine: Tips and Best Practices",
    },
    {
      id: 7,
      type: "Mindset",
      name: "Mindset",
      Img1: Team7,
      Title: "Mindset and Motivation",
      Description:
        "Explore techniques for cultivating a positive body image and improving self-confidence. Learn how to embrace your body and appreciate your unique qualities.",
      Header: "Developing a Positive Body Image and Self-Confidence",
    },
    {
      id: 8,
      type: "Mindset",
      name: "Mindset",
      Img1: Team8,
      Title: "Mindset and Motivation",
      Description:
        "Identify self-sabotaging behaviors and learn strategies to overcome them. Discover how to shift your mindset and develop healthier habits.",
      Header: "Overcoming Self-Sabotage in Your Weight Loss Journey",
    },
    {
      id: 9,
      type: "Recipes",
      name: "Recipes",
      Img1: Team9,
      Title: "Recipes and Meal Planning",
      Description:
        "Discover a variety of tasty and nutritious lunch options that are perfect for those with busy schedules. These recipes are quick to make and packed with essential nutrients.",
      Header: "Healthy and Flavorful Lunch Ideas for a Busy Lifestyle",
    },
    {
      id: 10,
      type: "Recipes",
      name: "Recipes",
      Img1: Team10,
      Title: "Recipes and Meal Planning",
      Description:
        "Discover a variety of tasty and nutritious lunch options that are perfect for those with busy schedules. These recipes are quick to make and packed with essential nutrients.",
      Header: "Healthy and Flavorful Lunch Ideas for a Busy Lifestyle",
    },
  ];

  // Filtering items based on the active tab
  const WeightLossTips = allItems.filter(
    (item) => item.type === "WeightLossTips"
  );
  const HealthyEatings = allItems.filter(
    (item) => item.type === "HealthyEatings"
  );
  const Fitness = allItems.filter((item) => item.type === "Fitness");
  const Mindset = allItems.filter((item) => item.type === "Mindset");
  const Recipes = allItems.filter((item) => item.type === "Recipes");

  // Function to render items based on the selected tab
  const renderItems = () => {
    switch (activeTab) {
      case "all":
        return allItems.map((item) => (
          <div key={item.id} className="p-4 bg-green95 rounded-lg mb-2">
            <div className="flex flex-col border border-green70 p-5">
              <p className="font-semibold text-xl mb-5"> {item.Title} </p>
              <img
                src={item.Img1}
                alt=""
                className="rounded-md self-end lg:w-[80%]"
              />
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mt-10 gap-5">
                <div className="space-y-5">
                  <h1 className="font-bold lg:text-2xl">{item.Header}</h1>
                  <p className="text-sm"> {item.Description} </p>
                </div>
                <div className="btn lg:btn-md btn-sm"> Read Now</div>
              </div>
            </div>
          </div>
        ));
      case "WeightLossTips":
        return WeightLossTips.map((item) => (
          <div key={item.id} className="p-4 bg-green95 rounded-lg mb-2">
            <div className="flex flex-col border border-green70 p-5">
              <p className="font-semibold text-xl mb-5"> {item.Title} </p>
              <img
                src={item.Img1}
                alt=""
                className="rounded-md self-end lg:w-[80%]"
              />
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mt-10 gap-5">
                <div className="space-y-5">
                  <h1 className="font-bold lg:text-2xl">{item.Header}</h1>
                  <p className="text-sm"> {item.Description} </p>
                </div>
                <div className="btn lg:btn-md btn-sm"> Read Now</div>
              </div>
            </div>
          </div>
        ));
      case "HealthyEatings":
        return HealthyEatings.map((item) => (
          <div key={item.id} className="p-4 bg-green95 rounded-lg mb-2">
            <div className="flex flex-col border border-green70 p-5">
              <p className="font-semibold text-xl mb-5"> {item.Title} </p>
              <img
                src={item.Img1}
                alt=""
                className="rounded-md self-end lg:w-[80%]"
              />
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mt-10 gap-5">
                <div className="space-y-5">
                  <h1 className="font-bold lg:text-2xl">{item.Header}</h1>
                  <p className="text-sm"> {item.Description} </p>
                </div>
                <div className="btn lg:btn-md btn-sm"> Read Now</div>
              </div>
            </div>
          </div>
        ));
      case "Fitness":
        return Fitness.map((item) => (
          <div key={item.id} className="p-4 bg-green95 rounded-lg mb-2">
            <div className="flex flex-col border border-green70 p-5">
              <p className="font-semibold text-xl mb-5"> {item.Title} </p>
              <img
                src={item.Img1}
                alt=""
                className="rounded-md self-end lg:w-[80%]"
              />
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mt-10 gap-5">
                <div className="space-y-5">
                  <h1 className="font-bold lg:text-2xl">{item.Header}</h1>
                  <p className="text-sm"> {item.Description} </p>
                </div>
                <div className="btn lg:btn-md btn-sm"> Read Now</div>
              </div>
            </div>
          </div>
        ));
      case "Mindset":
        return Mindset.map((item) => (
          <div key={item.id} className="p-4 bg-green95 rounded-lg mb-2">
            <div className="flex flex-col border border-green70 p-5">
              <p className="font-semibold text-xl mb-5"> {item.Title} </p>
              <img
                src={item.Img1}
                alt=""
                className="rounded-md self-end lg:w-[80%]"
              />
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mt-10 gap-5">
                <div className="space-y-5">
                  <h1 className="font-bold lg:text-2xl">{item.Header}</h1>
                  <p className="text-sm"> {item.Description} </p>
                </div>
                <div className="btn lg:btn-md btn-sm"> Read Now</div>
              </div>
            </div>
          </div>
        ));
      case "Recipes":
        return Recipes.map((item) => (
          <div key={item.id} className="p-4 bg-green95 rounded-lg mb-2">
            <div className="flex flex-col border border-green70 p-5">
              <p className="font-semibold text-xl mb-5"> {item.Title} </p>
              <img
                src={item.Img1}
                alt=""
                className="rounded-md self-end lg:w-[80%]"
              />
              <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between mt-10 gap-5">
                <div className="space-y-5">
                  <h1 className="font-bold lg:text-2xl">{item.Header}</h1>
                  <p className="text-sm"> {item.Description} </p>
                </div>
                <div className="btn lg:btn-md btn-sm"> Read Now</div>
              </div>
            </div>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="w-full container mx-auto">
      <div className="flex lg:flex-row flex-col bg-darkGreen15 p-5 rounded-b-md ">
        {/* Tabs */}
        <button
          className={`flex-1 py-2 text-center text-sm gap-10 ${
            activeTab === "all"
              ? "border-2 border-green-200 text-green70 gap-5 rounded-md"
              : "text-white"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={` flex-1 py-2 text-center text-sm gap-10 ${
            activeTab === "WeightLossTips"
              ? "border-2 border-green-200 text-green70 gap-5 rounded-md"
              : "text-white"
          }`}
          onClick={() => setActiveTab("WeightLossTips")}
        >
          Weight Loss Tips
        </button>
        <button
          className={`flex-1 py-2 text-center text-sm gap-10 ${
            activeTab === "HealthyEatings"
              ? "border-2 border-green-200 text-green70 gap-5 rounded-md"
              : "text-white"
          }`}
          onClick={() => setActiveTab("HealthyEatings")}
        >
          Healthy Eatings
        </button>
        <button
          className={`flex-1 py-2 text-center text-sm gap-10 ${
            activeTab === "Fitness"
              ? "border-2 border-green-200 text-green70 gap-5 rounded-md"
              : "text-white"
          }`}
          onClick={() => setActiveTab("Fitness")}
        >
          Fitness and Exercise
        </button>
        <button
          className={`flex-1 py-2 text-center text-sm gap-10 ${
            activeTab === "Mindset"
              ? "border-2 border-green-200 text-green70 gap-5 rounded-md"
              : "text-white"
          }`}
          onClick={() => setActiveTab("Mindset")}
        >
          Mindset and Motivation
        </button>
        <button
          className={`flex-1 py-2 text-center text-sm gap-10 ${
            activeTab === "Recipes"
              ? "border-2 border-green-200 text-green70 gap-5 rounded-md"
              : "text-white"
          }`}
          onClick={() => setActiveTab("Recipes")}
        >
          Recipes and Meal Planning
        </button>
      </div>

      <div className="grid lg:grid-cols-2 p-4 bg-green95 rounded-b-lg shadow-lg mt-20">
        {/* Render Items */}
        {renderItems()}
      </div>
    </div>
  );
};

export default TabsComponent;
