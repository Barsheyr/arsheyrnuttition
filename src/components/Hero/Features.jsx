import React from "react";
import { FeatureCards } from "../../data";

const Features = () => {
  return (
    <section className="align-element mt-44">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-semibold"> Features </h1>
        <p>
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </p>
      </div>

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
                <div className="bg-green90 lg:p-10 p-5 rounded-lg grid grid-rows-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={cardOnePic}
                      alt=""
                      className="rounded-md w-[15%]"
                    />
                    <h3 className="text-grey15 font-medium lg:text-2xl text-lg">
                      {cardOneT}
                    </h3>
                  </div>

                  <p> {cardOneP} </p>
                </div>
                {/* 2 */}
                <div className="bg-green90 lg:p-10 p-5 rounded-lg grid grid-rows-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={cardTwoPic}
                      alt=""
                      className="rounded-md w-[15%]"
                    />
                    <h3 className="text-grey15 font-medium lg:text-2xl text-lg">
                      {cardTwoT}
                    </h3>
                  </div>

                  <p> {cardTwoP} </p>
                </div>
                {/* 3 */}
                <div className="bg-green90 lg:p-10 p-5 rounded-lg grid grid-rows-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={cardThreePic}
                      alt=""
                      className="rounded-md w-[15%]"
                    />
                    <h3 className="text-grey15 font-medium lg:text-2xl text-lg">
                      {cardThreeT}
                    </h3>
                  </div>

                  <p> {cardThreeP} </p>
                </div>
                {/* 4 */}
                <div className="bg-green90 lg:p-10 p-5 rounded-lg grid grid-rows-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={cardFourPic}
                      alt=""
                      className="rounded-md w-[15%]"
                    />
                    <h3 className="text-grey15 font-medium lg:text-2xl text-lg">
                      {cardFourT}
                    </h3>
                  </div>
                  <p> {cardFourP} </p>
                </div>
                {/* 5 */}
                <div className="bg-green90 lg:p-10 p-5 rounded-lg grid grid-rows-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={cardFivePic}
                      alt=""
                      className="rounded-md w-[15%]"
                    />
                    <h3 className="text-grey15 font-medium lg:text-2xl text-lg">
                      {cardFiveT}
                    </h3>
                  </div>

                  <p> {cardFiveP} </p>
                </div>
                {/* 6 */}
                <div className="bg-green90 lg:p-10 p-5 rounded-lg grid grid-rows-2">
                  <div className="flex items-center gap-5">
                    <img
                      src={cardSixPic}
                      alt=""
                      className="rounded-md w-[15%]"
                    />
                    <h3 className="text-grey15 font-medium lg:text-2xl text-lg">
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
    </section>
  );
};

export default Features;
