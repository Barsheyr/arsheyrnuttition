import React from "react";
import { HeroBlogs } from "../../data";

const Blog = () => {
  return (
    <section className="align-element mt-20">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-semibold"> Our Blogs </h1>
        <p className="lg:px-44">
          Our Blogs Our blog is a treasure trove of informative and engaging
          articles written by our team of nutritionists, dietitians, and
          wellness experts. Here's what you can expect from our blog.
        </p>
      </div>

      {/* second */}
      <div className="grid lg:grid-cols-2 gap-5 mt-20">
        {HeroBlogs.map((HeroBlog) => {
          const { id, BDate, BPara, BName, BDesc, BHeader, BPicB, BPicS } =
            HeroBlog;

          return (
            <div key={id} className="bg-green95 shadow-sm rounded-md">
              <div className="lg:p-10 p-5 space-y-5">
                <img src={BPicB} alt="" />
                <div className="flex flex-row gap-5">
                  <div className="space-y-2">
                    <p> {BPara} </p>
                    <h1 className="text-xl font-semibold"> {BHeader} </h1>
                    <h2 className="">{BDesc}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
