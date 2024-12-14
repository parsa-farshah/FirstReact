import React, { use, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto bg-black text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT .</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <IoClose size={20} /> : <RiMenu3Line />}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 bg-black w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="p-5 w-full text-3xl font-bold text-[#00df9a] ">
          REACT .
        </h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
}
