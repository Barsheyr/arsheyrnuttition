import React from "react";
import { TeamIcon } from "../assets/images";
import BlogsTabs from "../components/BlogPage/Tabs";
import { BlogTabs, BlogTCom } from "../components";

const BlogPage = () => {
  return (
    <section className="align-element font-primary">
      <div>
        <div className="mt-20 flex flex-col text-center items-center space-y-10 py-20 bg-green95 lg:px-10 px-5 border rounded-md bg-over">
          <div className="bg-overview">
            <img src={TeamIcon} alt="" />
          </div>
          <h1 className="text-5xl font-bold"> Our Blogs </h1>
          <p>
            Welcome to the Blog section of Nutritionist, your trusted source for
            insightful articles, tips, and expert advice on nutrition and
            wellness. Here, we strive to provide you with engaging and
            informative content that will inspire and empower you to make
            informed decisions about your health. Explore our blog to discover a
            wealth of resources that cover a wide range of topics related to
            nutrition, fitness, and overall well-being.
          </p>
        </div>

        <div>
          {/* <BlogTabs /> */}
          <BlogTCom />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
