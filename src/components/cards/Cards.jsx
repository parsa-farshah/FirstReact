import React from "react";
import discord from "../../assets/discord.png";
import whatsapp from "../../assets/whatsapp.png";
import youtube from "../../assets/youtube.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] bg-white ">
      <div className="max-w-[1240px]  bg-opacity-60 md:h-[900px] mx-auto grid md:grid-cols-3 gap-8  p-4 ">
        {/* whatsapp */}
        <div className="w-full bg-white hover:scale-105 rounded-3xl duration-700 h-[700px] md:mt-[70px] shadow-xl flex flex-col justify-center items-center">
          <img
            className="w-[150px] hover:scale-110 duration-1000"
            src={whatsapp}
            alt=""
          />
          <h2 className="text-4xl font-extrabold p-3 md:text-lg lg:text-2xl">
            WhatsApp Application
          </h2>
          <p className="md:text-base lg:text-2xl text-2xl font-black uppercase mt-3 py-2 ">
            Prsa-Fresh
          </p>
          <div className="flex flex-col items-center">
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-6 border-b border-x-slate-5 py-2">
              100/000$
            </p>
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-2 border-b border-x-slate-5 py-2">
              100/000/000$
            </p>
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-2 border-b border-x-slate-500 py-2">
              100/000/000/000$
            </p>
          </div>
          <button className="bg-[#000000] mt-7 py-3 px-3  rounded-xl mx-auto font-bold text-white hover:bg-[#1d1a1a] active:border-2 hover:scale-125 duration-1000  active:border-[#979797] ">
            Start Trial
          </button>
        </div>
        {/* youtube */}
        <div className="w-full  bg-slate-200 h-[700px] rounded-3xl hover:scale-105 duration-700  shadow-2xl flex flex-col justify-center items-center">
          <img
            className="w-[150px] hover:scale-110 duration-1000"
            src={youtube}
            alt=""
          />
          <h2 className="text-4xl font-extrabold p-3 md:text-lg lg:text-2xl">
            YouTube Application
          </h2>
          <p className="md:text-base lg:text-2xl text-2xl font-black uppercase mt-3 py-2 ">
            Prsa-Fresh
          </p>
          <div className="flex flex-col items-center">
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-6 border-b border-x-slate-5 py-2">
              100/000$
            </p>
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-2 border-b border-x-slate-5 py-2">
              100/000/000$
            </p>
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-2 border-b border-x-slate-500 py-2">
              100/000/000/000$
            </p>
          </div>
          <button className="bg-[#00df9a]  mt-7 py-3 px-3 py-2 rounded-xl mx-auto font-bold text-black hover:bg-[#1fd407] active:border-2 hover:scale-125 duration-1000  active:border-[#979797] ">
            Start Trial
          </button>
        </div>
        {/* discord */}
        <div className="w-full  bg-white h-[700px] shadow-xl rounded-3xl  hover:scale-105 duration-700 flex flex-col justify-center items-center md:mt-[70px]">
          <img
            className="w-[150px] hover:scale-110 duration-1000"
            src={discord}
            alt=""
          />
          <h2 className="text-4xl font-extrabold p-3 md:text-lg lg:text-2xl">
            WhatsApp Application
          </h2>
          <p className="md:text-base lg:text-2xl text-2xl font-black uppercase mt-3 py-2 ">
            Prsa-Fresh
          </p>
          <div className="flex flex-col items-center">
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-6 border-b border-x-slate-5 py-2">
              100/000$
            </p>
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-2 border-b border-x-slate-5 py-2">
              100/000/000$
            </p>
            <p className="md:text-2xl lg:text-3xl text-2xl font-black mt-2 border-b border-x-slate-500 py-2">
              100/000/000/000$
            </p>
          </div>
          <button className="bg-[#000000] mt-7 py-3 px-3 py-2 rounded-xl mx-auto font-bold text-white hover:bg-[#1d1a1a] active:border-2 hover:scale-125 duration-1000  active:border-[#979797] ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
