import React, { useEffect, useState } from "react";
import { FiPhoneIncoming, FiPhoneOutgoing } from "react-icons/fi";
import Avatar from "./avatar.jsx";
import ConfirmModal from "./confirm-modal.jsx";
import { archiveActivity } from "../api/index.mjs";
import { toast } from "react-toastify";

/**
 * @typedef {import("../api/activity-schema.mjs").Activity} Activity
 * @typedef {Array<Activity>} Activities
 */

/**
 * @param {Object} props
 * @param {Activity} props.activity
 * @param {import("react").useState<Activities>} props.setActitvities
 * @param {import("react").useState<Activities>} props.setArchived
 * @param {boolean} props.archiveButton
 */
export default function ActivityCard({
  activity,
  setActivities,
  setArchived,
  archiveButton,
}) {
  /** @type {[number, useState]} */
  const [caller, setCaller] = useState();

  useEffect(() => {
    if (activity.direction === "inbound") {
      setCaller(activity.from);
    } else {
      setCaller(activity.to);
    }
  });

  const onArchiveSingleCall = (id) => {
    archiveActivity(id)
      .then(() => {
        setActivities((prev) => prev.filter((act) => act.id !== activity.id));
        setArchived((prev) => [...prev, activity]);
      })
      .catch(() => {
        toast.error("Failed to archive activity");
      });
  };

  return (
    <div
      tabIndex="0"
      className="collapse border border-gray-200 rounded-box shadow cursor-pointer"
    >
      <div className="collapse-title grid grid-cols-4 place-items-start max-w-sm p-4  ">
        <div className="col-start-1 mt-1">
          {showCallDirection(activity.direction)}
        </div>
        <div className="col-start-2 col-span-3">
          {callDescription(activity.direction, activity.to, activity.from)}
        </div>
        <div className="col-end-13 mt-2 text-xs text-gray-600">
          {showCallCreated(activity.created_at)}
        </div>
      </div>
      <div className="collapse-content">
        <div className="flex flex-col gap-y-2 mt-4">
          <div className="flex flex-row items-center">
            <Avatar />
            <p className="ml-2 text-sm font-bold">{caller}</p>
          </div>
          <div>Duration: {activity.duration}s</div>
          <div>Call type: {activity.call_type}</div>
          {archiveButton && (
            <>
              <label
                htmlFor={activity.id}
                className="btn btn-xs btn-accent font-thin w-full mt-4"
              >
                Archive
              </label>
              <ConfirmModal
                onClick={() => onArchiveSingleCall(activity.id)}
                id={activity.id}
                warningText="This will archive the current call detail. Are you sure you want to continue?"
                confirmText="Archive"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * @param {string} direction
 * @param {number} to
 * @param {number} from
 */
function callDescription(direction, to, from) {
  if (direction === "inbound") {
    return (
      <>
        <p className="font-bold">{from}</p>
        <p className="text-xs text-gray-500">{`Incoming call from ${from}`}</p>
      </>
    );
  }
  return (
    <>
      <p className="font-bold">{to}</p>
      <p className="text-xs text-gray-500">{`Outgoing call to ${to}`}</p>
    </>
  );
}

/**
 * @param {string} createdAt
 */
function showCallCreated(createdAt) {
  const calculateDaysSince = (createdAt) => {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const differenceInTime = currentDate - createdDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  const formatDate = (createdAt) => {
    const daysSinceCreated = calculateDaysSince(createdAt);
    const createdDate = new Date(createdAt);

    if (daysSinceCreated === 0) {
      return createdDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } else if (daysSinceCreated === 1) {
      return "Yesterday";
    } else {
      return createdDate.toLocaleDateString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    }
  };
  return formatDate(createdAt);
}

/**
 * @param {string} direction
 */
function showCallDirection(direction) {
  if (direction === "inbound") {
    return <FiPhoneIncoming className="w-4 h-4" />;
  }
  return <FiPhoneOutgoing className="w-4 h-4" />;
}
