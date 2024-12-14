import React, { useEffect, useState } from "react";

export default function EmailContact() {
  return (
    <div className="w-full py-16 text-white bg-black px-4">
      <div className="max-w-[1240px] mx-auto my-auto flex flex-col sm:flex-row gap-2">
        <div className="basis-2/4">
          <h1 className="text-xl lg:text-4xl md:text-3xl font-bold  py-2">
            Do you want to collaborate with me?
          </h1>
          <p>Can you send me your email</p>
        </div>
        <div>
          <div className="pt-4 flex flex-col basis-2/4 sm:flex-row  justify-center items-center gap-2 w-full">
            <input
              className="text-black w-full my-auto flex p-2 px-7   rounded-md "
              type="email"
              placeholder="Enter Your Email"
            />

            <button className=" w-[200px] bg-[#00df9a]   py-2 rounded-xl mx-auto font-bold text-black hover:bg-[#12ff88] active:border-2   active:border-[#ffffff] ">
              Notify Me
            </button>
          </div>
          <p className="pt-4 text-center sm:text-left">
            we can bout protection of your data read our <br />
            <span className="text-[#00df9a] pt-3">privacy policy .</span>
          </p>
        </div>
      </div>
    </div>
  );
}
