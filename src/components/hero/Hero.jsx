import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className=" text-white bg-black">
      <div className="max-w[800px] mt-[-96px] flex flex-col h-screen mx-auto justify-center items-center">
        <p className="uppercase text-[#00df9a] text-sm font-bold sm:text-2xl">
          growing with data analytics
        </p>
        <h1 className="uppercase font-semibold py-1 text-4xl md:text-7xl sm:text-6xl md:py-3 sm:py-2 ">
          grow with data
        </h1>
        <div className=" flex flex-row ">
          <p className="text-slate-200 text-xl sm:text-3xl md:text-4xl pr-1 font-bold">
            Front-End Developer is :
          </p>
          <ReactTyped
            strings={["Parsa", "Fresh", "Prsa", "DehghanPoor"]}
            typeSpeed={120}
            backSpeed={140}
            className="text-xl sm:text-3xl md:text-4xl font-bold"
            loop
          />
        </div>
        <p className="text-gray-400 uppercase font-bold text-xs sm:text-lg md:text-xl p-4  flex justify-center items-center text-center">
          this website my first exprience with html css js TaiLwind and <br />
          REACT
        </p>
        <button className="bg-[#00df9a] mt-3 px-3 py-2 rounded-xl mx-auto font-bold text-black hover:bg-[#12ff88] active:border-4   active:border-[#ffffff] ">
          Get Started
        </button>
      </div>
    </div>
  );
}
