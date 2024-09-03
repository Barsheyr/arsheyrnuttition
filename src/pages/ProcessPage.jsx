import React from "react";
import { TeamIcon } from "../assets/images";
import { FeatureCards } from "../data";

const ProcessPage = () => {
  return (
    <section className="align-element font-primary">
      <div>
        <div className="mt-20 flex flex-col text-center items-center space-y-10 py-20 bg-green95 p-10 border rounded-md bg-over">
          <div className="bg-overview">
            <img src={TeamIcon} alt="" />
          </div>
          <h1 className="text-5xl font-bold">
            Your Journey to Health and Wellness
          </h1>
          <p>
            At Nutritionist, we believe in providing a personalized and
            comprehensive approach to help you achieve your health and wellness
            goals. Our "How it Works" process is designed to guide you through
            each step of your journey, ensuring that you receive the support,
            knowledge, and tools you need to succeed. Here's a detailed
            breakdown of our process:
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="text-center space-y-5">
          <h1 className="text-6xl font-semibold"> How It Works </h1>
          <p className="lg:px-[15%]">
            We provide a step-by-step guide on how to get started on your
            journey towards better health and nutrition. We are here to simplify
            the process and make it easy for you to navigate our platform and
            access the resources you need to achieve your goals. Here's how it
            works
          </p>
        </div>

        <div>
          <div>
            {FeatureCards.map((FeatureCard) => {
              const {
                id,
                cardOneT,
                cardOneP,
                cardTwoT,
                cardTwoP,
                cardThreeT,
                cardThreeP,
                cardFourP,
                cardFiveP,
                cardSixP,
                cardFourT,
                cardFiveT,
                cardSixT,
                cardOnePic,
                cardTwoPic,
                cardThreePic,
                cardFourPic,
                cardFivePic,
                cardSixPic,
              } = FeatureCard;

              return (
                <div key={id}>
                  <div className="grid lg:grid-cols-2 gap-10 py-20">
                    {/* 1 */}
                    <div className="relative">
                      <h1 className="text-9xl font-black text-darkGreen30">
                        {" "}
                        01
                      </h1>
                      <div className="bg-green90 p-10 rounded-lg grid grid-rows- absolute -bottom-10">
                        <div className="flex items-center gap-5">
                          <img src={cardOnePic} alt="" className="rounded-md" />
                          <h3 className="text-grey15 font-medium text-2xl">
                            {cardOneT}
                          </h3>
                        </div>

                        <p> {cardOneP} </p>
                      </div>
                    </div>

                    {/* 2 */}
                    <div className="bg-green90 p-10 rounded-lg grid grid-rows-2">
                      <div className="flex items-center gap-5">
                        <img src={cardTwoPic} alt="" className="rounded-md" />
                        <h3 className="text-grey15 font-medium text-2xl">
                          {cardTwoT}
                        </h3>
                      </div>

                      <p> {cardTwoP} </p>
                    </div>
                    {/* 3 */}
                    <div className="bg-green90 p-10 rounded-lg grid grid-rows-2">
                      <div className="flex items-center gap-5">
                        <img src={cardThreePic} alt="" className="rounded-md" />
                        <h3 className="text-grey15 font-medium text-2xl">
                          {cardThreeT}
                        </h3>
                      </div>

                      <p> {cardThreeP} </p>
                    </div>
                    {/* 4 */}
                    <div className="bg-green90 p-10 rounded-lg grid grid-rows-2">
                      <div className="flex items-center gap-5">
                        <img src={cardFourPic} alt="" className="rounded-md" />
                        <h3 className="text-grey15 font-medium text-2xl">
                          {cardFourT}
                        </h3>
                      </div>
                      <p> {cardFourP} </p>
                    </div>
                    {/* 5 */}
                    <div className="bg-green90 p-10 rounded-lg grid grid-rows-2">
                      <div className="flex items-center gap-5">
                        <img src={cardFivePic} alt="" className="rounded-md" />
                        <h3 className="text-grey15 font-medium text-2xl">
                          {cardFiveT}
                        </h3>
                      </div>

                      <p> {cardFiveP} </p>
                    </div>
                    {/* 6 */}
                    <div className="bg-green90 p-10 rounded-lg grid grid-rows-2">
                      <div className="flex items-center gap-5">
                        <img src={cardSixPic} alt="" className="rounded-md" />
                        <h3 className="text-grey15 font-medium text-2xl">
                          {cardSixT}
                        </h3>
                      </div>
                      <p> {cardSixP} </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;
