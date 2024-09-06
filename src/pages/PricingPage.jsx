import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { pricingPageCards } from "../data";
import { FAQ, Vendor } from "../components";

const PricingPage = () => {
  const [isHourly, setIsHourly] = useState(true);

  const togglePricing = () => {
    setIsHourly(!isHourly);
  };

  return (
    <section className="align-element font-primary">
      <div className="mt-20 flex flex-col text-center items-center space-y-10 py-20 bg-green95 p-10 border rounded-md bg-over">
        <div className="bg-overview">{/* <img src={TeamIcon} alt="" /> */}</div>
        <h1 className="text-5xl font-bold">Our Pricing</h1>
        <p>
          At Nutritionist, we offer flexible pricing options to accommodate your
          unique requirements and budget. Our goal is to provide you with
          exceptional personalized nutrition coaching that is accessible and
          tailored to your needs. Choose from our three plans below and take the
          first step towards a healthier lifestyle
        </p>
      </div>

      <div className="grid grid-cols-2 mx-[30%] bg-green95 border border-5 rounded-md p-3 mt-10">
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
            !isHourly ? "bg-primary text-white" : "bg-darkGreen15 text-white"
          }`}
          onClick={togglePricing}
        >
          Yearly
        </button>
      </div>
      <p className="mt-5 text-xl text-center"> Save 50% Weekly </p>

      <div>
        {isHourly ? (
          <div className="grid lg:grid-cols-3 gap-10 mt-20 rounded-lg mb-20">
            {pricingPageCards.map((pricingPageCard, index) => {
              const {
                id,
                title,
                amount,
                text,
                Description,
                Description2,
                Description3,
                Description4,
                Description5,
                Description6,
                tick,
              } = pricingPageCard;

              return (
                <div key={id}>
                  <div className="rounded-md shadow-md bg-green95 lg:p-10 p-10 space-y-10">
                    <div>
                      <h2 className="text-3xl font-bold">{title}</h2>
                      <p className=""> {text} </p>
                    </div>
                    <div className=" bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description} </p>
                    </div>
                    <div className=" bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description2} </p>
                    </div>
                    <div className=" bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description3} </p>
                    </div>
                    <div className="bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description4} </p>
                    </div>
                    <div className="bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description5} </p>
                    </div>
                    <div className="bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description6} </p>
                    </div>

                    <p className="lg:text-5xl text-xl font-bold">
                      {amount}
                      <span className="text-sm font-semibold"> /year </span>
                      <div className="bg-red"> {tick} </div>
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
          <div className="grid lg:grid-cols-3 gap-10 mt-20 rounded-lg mb-20">
            {pricingPageCards.map((pricingPageCard, index) => {
              const {
                id,
                title,
                Mtext,
                MAmount,
                Description,
                Description2,
                Description3,
                Description4,
                Description5,
                Description6,
              } = pricingPageCard;

              return (
                <div key={index}>
                  <div className="rounded-md shadow-md bg-green95 lg:p-10 p-5 space-y-10">
                    <div>
                      <h2 className="text-3xl font-bold">{title}</h2>
                      <p className=""> {Mtext} </p>
                    </div>
                    <div className=" bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description} </p>
                    </div>
                    <div className=" bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description2} </p>
                    </div>
                    <div className=" bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description3} </p>
                    </div>
                    <div className="bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description4} </p>
                    </div>
                    <div className="bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description5} </p>
                    </div>
                    <div className="bg-green80 p-5 hover:bg-darkGreen20 hover:text-white rounded-md">
                      <p className="text-sm"> {Description6} </p>
                    </div>

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

      <div className="bg-green95 p-10 rounded-md">
        <div className="grid grid-cols-5 gap-10">
          <h1 className="bg-darkGreen15 text-white col-span-2 py-3 px-10 rounded-md">
            Features
          </h1>
          <h1 className="bg-darkGreen15 text-white py-3 px-10 rounded-md">
            Basic Plan
          </h1>
          <h1 className="bg-darkGreen15 text-white py-3 px-10 rounded-md">
            Premium Plan
          </h1>
          <h1 className="bg-darkGreen15 text-white py-3 px-10 rounded-md">
            Ultimate Plan
          </h1>
        </div>
        {/* 1 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2 font-semibold">
            Personalized Nutrition Plan
          </h1>
          <div className="flex flex-row justify-center ">
            <FcCheckmark className="bg-green75 rounded-sm" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75 rounded-sm" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75 rounded-sm" size={20} />
          </div>
        </div>
        {/* 2 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2 font-semibold"> Mobile App Access </h1>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 3 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2 font-semibold"> Email Support </h1>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 4 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2 font-semibold">
            One on One Video Consultations
          </h1>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 5 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2 font-semibold">
            Recipe Recommendations and Meal Planning
          </h1>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 6 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2"> Nutrition Plan </h1>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 7 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2"> Nutrition Plan </h1>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 8 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2"> Nutrition Plan </h1>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 9 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2"> Nutrition Plan </h1>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
        {/* 10 */}
        <div className="grid grid-cols-5 gap-10 border-b-2 border-green80 p-5 mt-5">
          <h1 className="col-span-2"> Nutrition Plan </h1>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <RxCross1
              className="bg-green80 rounded-md"
              size={20}
              color="green"
            />
          </div>
          <div className="flex flex-row justify-center">
            <FcCheckmark className="bg-green75" size={20} />
          </div>
        </div>
      </div>

      {/* faq */}
      <FAQ />
      {/* <Vendor /> */}
    </section>
  );
};

export default PricingPage;
