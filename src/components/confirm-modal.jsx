import React from "react";

/** @param {{ onClick: () => void, id: string, warningText: string, confirmText }} */
export default function ConfirmModal({
  onClick,
  id,
  warningText,
  confirmText,
}) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal items-center justify-center">
        <div className="modal-box w-64 text-center items-center justify-center rounded-lg">
          <p className="text-sm">{warningText}</p>
          <div className="modal-action justify-between">
            <label
              htmlFor={id}
              className="btn btn-sm btn-accent"
              onClick={onClick}
            >
              {confirmText}
            </label>
            <label htmlFor={id} className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
