import React from "react";
import { AboutCards } from "../../data";

const OurStory = () => {
  return (
    <div className="bg-green95 py-20 mt-20 font-primary">
      <div className="text-center lg:px-20 space-y-5">
        <h1 className="text-5xl font-bold"> Our Story </h1>
        <p>
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey.
        </p>
        <div>
          {AboutCards.map((AboutCard) => {
            const {
              Pic1,
              Pic2,
              Pic3,
              Pic4,
              Pic5,
              Pic6,
              Pic7,
              Pic8,
              Pic9,
              Pic10,
              AH1,
              AP1,
              AD1,
              AH2,
              AD2,
              AP2,
              AH3,
              AP3,
              AD3,
              AH4,
              AP4,
              AD4,
              AH5,
              AP5,
              AD5,
              AH6,
              AP6,
              AD6,
              AH7,
              AP7,
              AD7,
              AH8,
              AP8,
              AD8,
              AH9,
              AP9,
              AD9,
            } = AboutCard;

            return (
              <div className="mt-20">
                {/* first */}
                <div className="flex lg:flex-row flex-col">
                  <img src={Pic1} alt="" className="grow lg:w-[50%]" />
                  <p className="bg-green70 grow-0 w-10"></p>
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH1} </h1>
                    <p> {AP1} </p>
                    <p>{AD1}</p>
                  </div>
                </div>
                {/* second */}
                <div className="flex lg:flex-row flex-col-reverse">
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH2} </h1>
                    <p> {AP2} </p>
                    <p>{AD2}</p>
                  </div>
                  <div className="bg-green70 grow-0 w-10"></div>
                  <img src={Pic2} alt="" className="grow lg:w-[50%]" />
                </div>
                {/* third */}
                <div className="flex lg:flex-row flex-col">
                  <img src={Pic3} alt="" className="grow lg:w-[50%]" />
                  <p className="bg-green70 grow-0 w-10"></p>
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH3} </h1>
                    <p> {AP3} </p>
                    <p>{AD3}</p>
                  </div>
                </div>
                {/* fourth */}
                <div className="flex lg:flex-row flex-col-reverse">
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH4} </h1>
                    <p> {AP4} </p>
                    <p>{AD4}</p>
                  </div>
                  <div className="bg-green70 grow-0 w-10"></div>
                  <img src={Pic4} alt="" className="grow lg:w-[50%]" />
                </div>
                {/* fifth */}
                <div className="flex lg:flex-row flex-col">
                  <img src={Pic5} alt="" className="grow lg:w-[50%]" />
                  <p className="bg-green70 grow-0 w-10"></p>
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH5} </h1>
                    <p> {AP5} </p>
                    <p>{AD5}</p>
                  </div>
                </div>
                {/* six */}
                <div className="flex lg:flex-row flex-col-reverse">
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH6} </h1>
                    <p> {AP6} </p>
                    <p>{AD6}</p>
                  </div>
                  <div className="bg-green70 grow-0 w-10"></div>
                  <img src={Pic6} alt="" className="grow lg:w-[50%]" />
                </div>
                {/* seven */}
                <div className="flex lg:flex-row flex-col">
                  <img src={Pic7} alt="" className="grow lg:w-[50%]" />
                  <p className="bg-green70 grow-0 w-10"></p>
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH7} </h1>
                    <p> {AP7} </p>
                    <p>{AD7}</p>
                  </div>
                </div>
                {/* eight */}
                <div className="flex lg:flex-row flex-col-reverse">
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH8} </h1>
                    <p> {AP8} </p>
                    <p>{AD8}</p>
                  </div>
                  <div className="bg-green70 grow-0 w-10"></div>
                  <img src={Pic8} alt="" className="grow lg:w-[50%]" />
                </div>
                {/* nine */}
                <div className="flex lg:flex-row flex-col">
                  <img src={Pic9} alt="" className="grow lg:w-[50%]" />
                  <p className="bg-green70 grow-0 w-10"></p>
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH9} </h1>
                    <p> {AP9} </p>
                    <p>{AD9}</p>
                  </div>
                </div>
                {/* ten */}
                <div className="flex lg:flex-row flex-col-reverse">
                  <div className="grow py-10 px-10 space-y-10 text-start">
                    <h1 className="text-2xl font-bold"> {AH2} </h1>
                    <p> {AP1} </p>
                    <p>{AD2}</p>
                  </div>
                  <div className="bg-green70 grow-0 w-10"></div>
                  <img src={Pic10} alt="" className="grow lg:w-[50%]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
