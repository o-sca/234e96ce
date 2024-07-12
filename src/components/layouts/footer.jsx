import React from "react";

import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

/** @param {{ calls: number; }} */
export default function Footer({ calls }) {
  return (
    <footer className="flex flex-shrink-0 text-center w-full p-4 bg-primary border border-gray-200 shadow items-center justify-between p-6">
      <div className="indicator">
        {calls < 1 ? null : (
          <div className="indicator-item badge badge-sm badge-error">
            {calls}
          </div>
        )}
        <FaPhoneAlt color="white" className="w-6 h-6 cursor-pointer" />
      </div>
      <div className="divider divider-vertical"></div>
      <BiSolidContact color="white" className="w-6 h-6 cursor-pointer" />
      <div className="divider divider-vertical"></div>
      <FaHome color="white" className="w-6 h-6 cursor-pointer" />
      <div className="divider divider-vertical"></div>
      <IoSettingsSharp color="white" className="w-6 h-6 cursor-pointer" />
    </footer>
  );
}
