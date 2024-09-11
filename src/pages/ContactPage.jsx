import React from "react";
import { TeamIcon } from "../assets/images";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import Map from "../assets/images/Map.jpg";

const ContactPage = () => {
  return (
    <section className="align-element font-primary">
      <div className="py-20">
        <div className="mt-20 flex flex-col text-center items-center space-y-10 py-20 bg-green95 lg:px-10 px-5 border rounded-t-xl bg-over">
          <div className="bg-overview">
            <img src={TeamIcon} alt="" />
          </div>
          <h1 className="text-5xl font-bold"> Contact Us </h1>
          <p>
            We value your feedback, questions, and concerns at Nutritionist. Our
            dedicated team is here to assist you and provide the support you
            need on your nutritional journey. Please don't hesitate to reach out
            to us using any of the following contact methods
          </p>
        </div>

        <div className="bg-darkGreen15 text-green95 rounded-b-xl">
          <div className="flex lg:flex-row flex-col  items-center justify-between lg:px-44 py-10 gap-10">
            <div className="bg-darkGreen25 px-10 py-5 rounded-md flex flex-col items-center space-y-3">
              <MdEmail size={30} />
              <p> support@gmail.com</p>
            </div>
            <div className="bg-darkGreen25 px-10 py-5 rounded-md flex flex-col items-center space-y-3">
              <FaPhone size={30} />
              <p> +90 0290 238823</p>
            </div>
            <div className="bg-darkGreen25 px-10 py-5 rounded-md flex flex-col items-center space-y-3">
              <FaLocationDot size={30} />
              <p> Lagos, Nigeria </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="grid lg:grid-cols-2 py-20 gap-20 bg-green95 px-10">
          <Form
            method="post"
            className="md:w-full w-full lg:p-8 flex flex-col gap-y-10"
          >
            <div className="grid lg:grid-cols-2 gap-10">
              <FormInput
                type="text"
                label="First Name"
                name="identifier"
                placeholder="Enter your First Name"
              />
              <FormInput
                type="text"
                label="Last Name"
                name="identifier"
                placeholder="Enter your Last Name"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <FormInput
                type="email"
                label="email"
                name="identifier"
                placeholder="Enter your Email"
              />
              <FormInput
                type="number"
                label="Phone Number"
                name="identifier"
                placeholder="Enter your Phone Number"
              />
            </div>
            <textarea
              placeholder="Message...."
              class="textarea textarea-bordered textarea-lg w-full bg-green95"
            ></textarea>

            <div className="mt-4">
              <SubmitBtn text="Send a Message" />
            </div>
          </Form>

          <div>
            <img src={Map} alt="" />
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="bg-green90 lg:p-20 p-10 rounded-lg mb-20 ">
        <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">
              We Are Proud of Our Achievements
            </h1>
            <p className="font-normal text-base lg:pr-[20%] text-grey35">
              But our ultimate satisfaction comes from seeing our clients
              achieve their goals and live healthier, happier lives. Join
              Nutritionist today and embark on your own transformative journey
              towards optimal health and well-being.
            </p>
          </div>
          <div className="btn border-none bg-darkGreen15 text-white mt-5 hover:bg-green70 hover:text-black">
            <p>Join Now </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
