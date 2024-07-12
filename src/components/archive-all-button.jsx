import React from "react";
import { IoMdArchive } from "react-icons/io";
import ConfirmModal from "./confirm-modal";

/** @param {{ onClick: () => void, disabled: boolean }} */
export default function ArchiveAllButton({ onClick, disabled }) {
  return (
    <>
      <label
        htmlFor="archive-all-modal"
        className="mb-2 btn btn-sm btn-accent modal-button"
        disabled={disabled}
      >
        <IoMdArchive className="mr-2 text-white" />
        <p className="items-center justify-center text-xs text-white font-thin">
          Archive All Calls
        </p>
      </label>
      <ConfirmModal
        onClick={onClick}
        id="archive-all-modal"
        warningText="This action will archive all calls. Are you sure you want to proceed?"
        confirmText="Archive All"
      />
    </>
  );
}
