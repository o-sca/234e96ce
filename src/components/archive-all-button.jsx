import React from "react";
import { IoMdArchive } from "react-icons/io";

/** @param {{ onClick: () => void, disabled: boolean }} */
export default function ArchiveAllButton({ onClick, disabled }) {
  return (
    <>
      <label
        htmlFor="archive-all-modal"
        className="mb-4 btn btn-sm btn-accent modal-button"
        disabled={disabled}
      >
        <IoMdArchive className="mr-2 text-white" />
        <p className="items-center justify-center text-xs text-white font-thin">
          Archive All Calls
        </p>
      </label>
      <input type="checkbox" id="archive-all-modal" className="modal-toggle" />
      <div className="modal items-center justify-center">
        <div className="modal-box w-64 text-center items-center justify-center rounded-lg">
          <p className="text-sm">
            This action will archive all calls. Are you sure you want to
            proceed?
          </p>
          <div className="modal-action">
            <label
              htmlFor="archive-all-modal"
              className="btn btn-sm btn-accent"
              onClick={onClick}
            >
              Archive All
            </label>
            <label htmlFor="archive-all-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 *
    <button
      className="mb-4 btn btn-sm btn-block btn-accent"
      onClick={onClick}
      disabled={disabled}
    >
      <IoMdArchive className="mr-2 text-white" />
      <p className="items-center justify-center text-xs text-white font-thin">
        Archive All Calls
      </p>
    </button>
*/
