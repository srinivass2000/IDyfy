import React from "react";
import bgImg from "../../../assets/images/idea_ng.png";
// import smallImg from "../../../assets/images/idea-icon.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  console.log(window.innerWidth);
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-white">Groww Ideas like trees</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold text-white">
            IDyfy
          </h1>
          <p className="text-2xl text-white">
            A Version Controlled Hub for Ideas
          </p>
          <Link
            to="/feed"
            type="button"
            className="py-3 px-6 sm:w-[60%] my-4 text-white"
            style={{ background: "#E43A19" }}
          >
            Get Started
          </Link>
        </div>
        <div>
          <img
            className="w-full d-none d-lg-block d-xl-block d-xxl-block d-md-block d-sm-hidden"
            src={bgImg}
            alt="/"
          />
        </div>
        <div
          className=" flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                 md:left-1/2 transform md:translate-x-56 bg-zinc-200
                border border-slate-800 rounded-xl text-center shadow-xl"
          style={{ width: "auto", height: "auto" }}
        >
          <p className="text-slate-500">Our Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-700">
              <img
                src="https://img.icons8.com/fluency/48/000000/macbook-idea.png"
                className="h-8 text-indigo-600 pr-1"
                alt="idea"
              />
              Ideas
            </p>
            <p className="flex px-4 py-2 text-slate-700">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/versions.png"
                className="h-6 text-indigo-600 pr-1"
                alt="Versioning"
              />
              Versioning
            </p>
            <p className="flex px-4 py-2 text-slate-700">
              <img
                src="https://img.icons8.com/color-glass/48/000000/graph.png"
                className="h-6 text-indigo-600 pr-1"
                alt="Graph"
              />
              Immersive UI
            </p>
            <p className="flex px-4 py-2 text-slate-700">
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-contribution-achievements-flaticons-flat-flat-icons.png"
                className="h-6 text-indigo-600 pr-1"
                alt="Contributing"
              />
              Contributions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
