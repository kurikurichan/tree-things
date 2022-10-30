import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Connecting teachers to communities through ecology
            </h1>
            <p className="mb-8 leading-relaxed">
              Lor-Axe is a platform that connects teachers with local
              non-profits and resources to promote responsible environmental
              citizenship. For teachers, we provide lesson plans and educational
              resources that connect with OSPI learning standards. For students,
              we provide a platform to track and interact around
              eco-citizenship.
            </p>
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Launch App
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/treeImage.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
