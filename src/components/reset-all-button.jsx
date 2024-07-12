import React from "react";
import { MdUnarchive } from "react-icons/md";
import ConfirmModal from "./confirm-modal";

/** @param {{ onClick: () => void, disabled: boolean }} */
export default function ResetAllButton({ onClick, disabled }) {
  return (
    <>
      <label
        htmlFor="reset-all-modal"
        className="mb-2 btn btn-sm btn-secondary modal-button"
        disabled={disabled}
      >
        <MdUnarchive className="mr-2 text-white w-4 h-4" />
        <p className="items-center justify-center text-xs text-white font-thin">
          Unarchive All
        </p>
      </label>
      <ConfirmModal
        onClick={onClick}
        id="reset-all-modal"
        warningText="This action will unarchive all calls. Are you sure you want to proceed?"
        confirmText="Unarchive"
      />
    </>
  );
}
