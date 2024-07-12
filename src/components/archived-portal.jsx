import React from "react";
import { IoArchiveOutline } from "react-icons/io5";

/** @param {{ archivedCount: number }} */
export default function ArchivedPortal({ archivedCount }) {
  return (
    <div className="bg-gray-400 rounded-box cursor-pointer">
      <div className="flex items-center p-4">
        <IoArchiveOutline className="w-5 h-5 mr-2" />
        <p className="font-semibold">Open Archived Calls</p>
        <div className="ml-auto rounded-full border text-white text-xs font-bold ml-2 px-2 py-1">
          {archivedCount}
        </div>
      </div>
    </div>
  );
}
