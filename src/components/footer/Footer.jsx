import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

export default function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="max-w[1240px] text-white mx-auto flex flex-col py-16 px-4 md:flex-row ">
        <div className="basis-2/5">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT .</h1>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            eius expedita necessitatibus voluptatem unde laboriosam animi magni
            libero nemo quasi illum molestias eligendi dolor rem corrupti
            eveniet dolorem, a eos.
          </p>
          <div className="flex justify-between mt-8 px-2">
            <TiSocialFacebookCircular size={30} />
            <TiSocialInstagram size={30} />
            <TiSocialLinkedin size={30} />
            <TiSocialTwitter size={30} />
            <TiSocialYoutube size={30} />
          </div>
        </div>
        <div className="flex md:justify-around justify-between basis-3/5">
          <div>
            <div className="mt-8">
              <h6 className="text-gray-400">solutions</h6>
            </div>
            <ul className="mt-5">
              <li>Analytics</li>
              <li className="mt-2">Marketing</li>
              <li className="mt-2">Guides</li>
              <li className="mt-2">API Status</li>
            </ul>
          </div>
          <div>
            <div className="mt-8">
              <h6 className="text-gray-400">solutions</h6>
            </div>
            <ul className="mt-5">
              <li>Analytics</li>
              <li className="mt-2">Marketing</li>
              <li className="mt-2">Guides</li>
              <li className="mt-2">API Status</li>
            </ul>
          </div>
          <div>
            <div className="mt-8">
              <h6 className="text-gray-400">solutions</h6>
            </div>
            <ul className="mt-5">
              <li>Analytics</li>
              <li className="mt-2">Marketing</li>
              <li className="mt-2">Guides</li>
              <li className="mt-2">API Status</li>
            </ul>
          </div>
          <div>
            <div className="mt-8">
              <h6 className="text-gray-400">solutions</h6>
            </div>
            <ul className="mt-5">
              <li>Analytics</li>
              <li className="mt-2">Marketing</li>
              <li className="mt-2">Guides</li>
              <li className="mt-2">API Status</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
