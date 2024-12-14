import React from "react";
import instagram from "../../assets/instagram.png";

export default function Analytics() {
  return (
    <div className="text-black bg-white md:h-[600px] w-full  py-16">
      <div className="max-w-[1240px] mx-auto grid grid-rows-2 md:grid-cols-2 ">
        <img
          className="w-[300px] mx-auto my-8 col-span-1 "
          src={instagram}
          alt="instagram"
        />
        <div className="flex flex-col md:justify-center items-center  col-span-1">
          <p className="text-2xl md:text-5xl sm:text-4xl text-[#ff1b72]  font-bold">
            My Instagram :
          </p>
          <h1 className="uppercase font-bold text-2xl md:text-3xl sm:text-2xl text-center py-2">
            This Site Create By Prsa Fresh
          </h1>
          <p className="text-center text-md md:text-xl sm:text-lg font-semibold">
            this is my site and i am create that and I built this entire website
            from scratch, and this is my Instagram ID :{" "}
            <span className="text-[#ff1b72]">prsa-fresh</span>
          </p>
          <button className="bg-[#000000] mt-3 px-3 py-2 rounded-xl mx-auto font-bold text-white hover:bg-[#2e2e2e] active:border-2   active:border-[#979797] ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
