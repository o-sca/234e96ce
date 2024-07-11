import React from "react";
import ActivityCard from "../components/activity-card.jsx";

/** @param {{ activities: Array<import("../api/activity-schema.mjs").Activity> }} */
export default function ActivityFeed({ activities }) {
  if (activities.length < 1) {
    return (
      <p className="text-center text-gray-500 italic">No activities to show</p>
    );
  }

  return (
    <>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </>
  );
}
