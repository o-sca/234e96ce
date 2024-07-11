import React from "react";
import { activitySchema } from "../api/index.mjs";
import z from "zod";

/**
 * @param {{ activity: z.infer<typeof activitySchema> }} activity
 */
export default function ActivityCard({ activity }) {
  return (
    <div>
      <h2>{activity.id}</h2>
      <p>{activity.description}</p>
      <p>Duration: {activity.duration}</p>
    </div>
  );
}
