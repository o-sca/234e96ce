import React from "react";
import ActivityCard from "../components/activity-card";

/** @typedef {Array<import("../api/activity-schema.mjs").Activity>} Activities */

/** @param {{ activities: Activities; setActivities: import("react").useState<Activities>  }} */
export default function ArchivedFeed({ activities, setActivities }) {
  if (activities.length < 1) {
    return (
      <p className="text-center text-gray-500 italic">No archives to show</p>
    );
  }

  return (
    <>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          setActivities={setActivities}
          archiveButton={false}
        />
      ))}
    </>
  );
}
