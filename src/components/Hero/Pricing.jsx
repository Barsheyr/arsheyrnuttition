import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { pricingCards } from "../../data";

const Pricing = () => {
  const [isHourly, setIsHourly] = useState(true);

  const togglePricing = () => {
    setIsHourly(!isHourly);
  };

  return (
    <div className="align-element py-20 mt-10">
      <div>
        <div className="flex flex-col lg:items-center items-start justify-between">
          <div className="flex flex-col gap-5 text-center">
            <h1 className="text-5xl font-semibold"> Our Pricing </h1>
            <p className="font-normal text-base px-[20%] text-grey35">
              We outline our flexible and affordable options to support you on
              your journey to optimal health and nutrition. We believe that
              everyone deserves access to personalized nutrition guidance and
              resources
            </p>
          </div>

          <div className="flex flex-row items-center bg-green95 border border-5 rounded-md p-3 mt-10">
            <button
              className={`px-4 py-2 font-semibold rounded-md ${
                isHourly ? "bg-primary text-white" : "bg-darkGreen15 text-white"
              }`}
              onClick={togglePricing}
            >
              Hourly
            </button>
            <button
              className={`ml-2 px-4 py-2 font-semibold rounded-md ${
                !isHourly
                  ? "bg-primary text-white"
                  : "bg-darkGreen15 text-white"
              }`}
              onClick={togglePricing}
            >
              Yearly
            </button>
          </div>
          <p className="mt-5 text-xl"> Save 50% Weekly </p>
        </div>
      </div>

      {isHourly ? (
        <div className="grid lg:grid-cols-3 gap-10 mt-20 rounded-lg">
          {pricingCards.map((pricingCard, index) => {
            const { id, title, amount, text, Description } = pricingCard;

            return (
              <div key={id}>
                <div className="rounded-md shadow-md bg-green90 lg:p-10 p-5 space-y-10">
                  <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className=""> {text} </p>
                  </div>
                  <p className="text-sm"> {Description} </p>

                  <p className="lg:text-5xl text-xl font-bold">
                    {amount}
                    <span className="text-sm font-semibold"> /year </span>
                  </p>

                  <div className="btn w-full bg-green70 border-none hover:bg-darkGreen15 hover:text-white">
                    Choose Plan
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10 mt-20 rounded-lg">
          {pricingCards.map((pricingCard, index) => {
            const { id, title, amount, text, Description, MAmount } =
              pricingCard;

            return (
              <div key={index}>
                <div className="rounded-md shadow-md bg-green90 lg:p-10 p-5 space-y-10">
                  <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className=""> {text} </p>
                  </div>
                  <p className="text-sm"> {Description} </p>

                  <p className="lg:text-5xl text-xl font-bold">
                    {MAmount}
                    <span className="text-sm font-semibold"> /month </span>
                  </p>

                  <div className="btn w-full bg-green70 border-none hover:bg-darkGreen15 hover:text-white">
                    Choose Plan
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pricing;
