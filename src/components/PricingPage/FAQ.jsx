import React from "react";
import { BsFlower2 } from "react-icons/bs";

const FAQ = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 text-center py-20 mt-20">
        <h1 className="text-5xl font-semibold"> FAQ </h1>
        <p className="font-normal text-base lg:px-[20%] text-grey35">
          We address commonly asked questions and provide comprehensive answers
          to help you navigate your way through your nutrition and wellness
          journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-20  mb-20 lg:px-10">
        <div className="grid bg-green95 py-10 rounded-md border lg:px-20 px-5 lg:col-span-2">
          <div className="space-y-10">
            <div className="collapse collapse-plus bg-white99 border border-gray-300 p-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title lg:text-xl font-medium">
                What is personalized nutrition coaching?
              </div>
              <div className="collapse-content">
                <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
                <p className="text-sm">
                  Personalized nutrition coaching involves creating a customized
                  nutrition plan based on your unique goals, preferences, and
                  dietary requirements. Our team of experts will work closely
                  with you to develop a plan that fits your lifestyle and helps
                  you achieve optimal health and wellness.
                </p>
              </div>
            </div>
            {/* 2*/}
            <div className="collapse collapse-plus bg-white99 border border-gray-300 p-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title lg:text-xl font-medium">
                How can nutrition coaching help me lose weight?
              </div>
              <div className="collapse-content">
                <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
                <p className="text-sm">
                  Nutrition coaching can help you lose weight by providing
                  personalized guidance on healthy eating habits, portion
                  control, and balanced meal planning. A coach will help you
                  understand your nutritional needs, track progress, and stay
                  accountable to your goals. With expert support, you'll develop
                  sustainable strategies for long-term weight loss success.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="collapse collapse-plus bg-white99 border border-gray-300 p-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title lg:text-xl font-medium">
                Can I still enjoy my favorite foods while on a nutrition plan?
              </div>
              <div className="collapse-content">
                <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
                <p className="text-sm">
                  Yes, you can still enjoy your favorite foods while on a
                  nutrition plan. The key is moderation and finding healthier
                  alternatives or portions that fit within your goals. Balancing
                  indulgences with nutrient-rich meals allows you to enjoy what
                  you love while staying on track.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="collapse collapse-plus bg-white99 border border-gray-300 p-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title lg:text-xl font-medium">
                How often will I have contact with my nutritionist?
              </div>
              <div className="collapse-content">
                <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
                <p className="text-sm">
                  You can expect regular contact with your nutritionist,
                  typically through weekly or bi-weekly check-ins, depending on
                  your personalized plan. These may include in-person meetings,
                  virtual consultations, or email support. Your nutritionist
                  will adjust the frequency based on your progress and specific
                  needs.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="collapse collapse-plus bg-white99 border border-gray-300 p-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title lg:text-xl font-medium">
                How long will it take to see results?
              </div>
              <div className="collapse-content">
                <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
                <p className="text-sm">
                  The time it takes to see results can vary depending on the
                  specific situation or effort involved. In most cases, you may
                  start noticing small improvements within a few weeks, while
                  significant results might take several months. Consistency and
                  patience are key to achieving lasting outcomes.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className="collapse collapse-plus bg-white99 border border-gray-300 p-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title lg:text-xl font-medium">
                Are the meal plans and recipes provided suitable for vegetarians
                or vegans?
              </div>
              <div className="collapse-content">
                <div className="w-[100%] h-0.5 bg-gray-200 my-5"></div>
                <p className="text-sm">
                  Yes, the meal plans and recipes can be tailored to suit
                  vegetarians and vegans. Many options include plant-based
                  ingredients or can be easily modified by substituting animal
                  products with vegan alternatives. Please check each recipe for
                  specific dietary adjustments or recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green95 h-fit py-10 rounded-lg border">
          <div className="flex flex-col items-center space-y-5">
            <BsFlower2 color="green" size={100} />
            <h1 className="text-2xl"> Ask your question</h1>
            <p className="text-sm"> Feel Free to Ask questions on anytime</p>
            <div className="btn btn-sm"> Ask a Question </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
