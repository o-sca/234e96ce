import React from "react";
import { IoMdArchive } from "react-icons/io";

/** @param {{ onClick: () => void }} */
export default function ArchiveAllButton({ onClick }) {
  return (
    <button
      className="mb-4 btn btn-sm btn-block btn-secondary"
      onClick={onClick}
    >
      <IoMdArchive className="mr-2" />
      <p className="text-center text-xs font-thin">Archive All Calls</p>
    </button>
  );
}
