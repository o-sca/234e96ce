import { archiveActivity } from "./archive-activity.mjs";
import { getActivities } from "./get-activities.mjs";

/**
 * Archive all activities by a user by their "number" (via).
 *
 * @param {number} via - user number
 * @Promise<void>
 * @throws {Error} if not all activities by that user were archived
 */
export const archiveAllActivities = async (via) => {
  const activities = await getActivities();
  const result = await Promise.allSettled(
    activities.map((activity) => {
      if (activity.via === via) {
        archiveActivity(activity.id);
      }
    }),
  );
  const failed = result.filter((res) => res.status === "rejected");
  if (failed.length > 0) {
    throw new Error("Failed to archive all activities");
  }
};
