import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function FeedPortal() {
  return (
    <div className="bg-gray-400 rounded-box cursor-pointer">
      <div className="flex items-center p-4">
        <RiArrowGoBackFill className="w-5 h-5 mr-2" />
        <p className="font-semibold">Go Back To Activity Feed</p>
      </div>
    </div>
  );
}
