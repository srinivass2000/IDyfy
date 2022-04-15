import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Trusted by public across the world
          </h2>
          <p className="text-2xl py-6 text-gray-400 text-xl-md">
            IDyfy is the next generation web-app built around the concept that
            major problems cannot be solved by a single person or entity and
            hence require the contribution of people
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center my-2">
          <div className="border py-8 rounded-xl shadow-xl mx-4">
            <p className="text-6xl font-bold text-indigo-600">500+</p>
            <p className="text-gray-400 mt-2">IDEAS</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl mx-4">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">SUPPORT</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl mx-4">
            <p className="text-6xl font-bold text-indigo-600">100K+</p>
            <p className="text-gray-400 mt-2">ACTIVE USERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
