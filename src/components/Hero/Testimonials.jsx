import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscQuote } from "react-icons/vsc";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="align-element mt-20 py-20">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-semibold"> Our Testimonials </h1>
        <p className="lg:px-44">
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </div>

      {/* second */}
      <Swiper
        breakpoints={{
          120: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 1.5, spaceBetween: 10 },
          1024: { slidesPerView: 2.5, spaceBetween: 10 },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-darkGreen15 mt-20"
      >
        <SwiperSlide className="bg-green95 border rounded-md mb-20">
          <div className="p-5">
            <VscQuote size={50} />
            <p className="mt-10 text-sm">
              I can't thank Nutritionist enough for their personalized nutrition
              coaching. It has completely transformed my approach to food and
              helped me shed those extra pounds. Highly recommended!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-green95 border rounded-md">
          <div className="p-5">
            <VscQuote size={50} />
            <p className="mt-10 text-sm">
              Nutritionist has been a game-changer for me. The expert guidance
              and support I received from their team made my weight loss journey
              so much easier. Thank you!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-green95 border rounded-md">
          <div className="p-5">
            <VscQuote size={50} />
            <p className="mt-10 text-sm">
              I had struggled with my weight for years until I found
              Nutritionist. Their personalized approach and tailored nutrition
              plan made all the difference. I've never felt better!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-green95 border rounded-md">
          <div className="p-5">
            <VscQuote size={50} />
            <p className="mt-10 text-sm">
              Nutritionist has been a game-changer for me. The expert guidance
              and support I received from their team made my weight loss journey
              so much easier. Thank you!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
