import React from "react";
import { FiPhoneIncoming, FiPhoneOutgoing } from "react-icons/fi";

/**
 * @param {{ activity: import("../api/activity-schema.mjs").Activity }}
 */
export default function ActivityCard({ activity }) {
  if (activity.via === activity.from) {
    return (
      <div className="grid grid-cols-4 place-items-start max-w-sm p-4 border border-gray-200 rounded-lg shadow cursor-pointer">
        <div className="col-start-1 mt-1">
          {showCallDirection(activity.direction)}
        </div>
        <div className="col-start-2 col-span-3">
          <p className="font-bold">{activity.to}</p>
          <p className="text-xs text-gray-500">
            Incoming call from {activity.to}
          </p>
        </div>
        <div className="col-end-13 mt-2 text-xs text-gray-600">
          {showCallCreated(activity.created_at)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-4 place-items-start max-w-sm p-4 border border-gray-200 rounded-lg shadow cursor-pointer">
        <div className="col-start-1 mt-1">
          {showCallDirection(activity.direction)}
        </div>
        <div className="col-start-2 col-span-3">
          <p className="font-bold">{activity.from}</p>
          <p className="text-xs text-gray-500">
            Outgoing call from {activity.from}
          </p>
        </div>
        <div className="col-end-13 mt-2 text-xs text-gray-600">
          {showCallCreated(activity.created_at)}
        </div>
      </div>
    );
  }
}

/**
 * @param {string} createdAt
 */
const showCallCreated = (createdAt) => {
  const time = new Date(createdAt);
  return time.toLocaleTimeString("en-US", {
    timeStyle: "medium",
    hour12: true,
  });
};

/**
 * @param {string} direction
 */
const showCallDirection = (direction) => {
  if (direction === "inbound") {
    return <FiPhoneIncoming />;
  }
  return <FiPhoneOutgoing />;
};
