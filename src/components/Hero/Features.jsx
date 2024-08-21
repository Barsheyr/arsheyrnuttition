import React from "react";
import { FeatureCards } from "../../data";

const Features = () => {
  return (
    <section className="align-element mt-44">
      <div className="text-center space-y-5">
        <h1 className="text-6xl font-semibold"> Features </h1>
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
                <div className="bg-green90 p-10 rounded-lg grid grid-rows-2">
                  <div className="flex items-center gap-5">
                    <img src={cardOnePic} alt="" className="rounded-md" />
                    <h3 className="text-grey15 font-medium text-2xl">
                      {cardOneT}
                    </h3>
                  </div>

                  <p> {cardOneP} </p>
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
    </section>
  );
};

export default Features;
