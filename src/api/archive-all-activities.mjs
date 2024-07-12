import { archiveActivity } from "./archive-activity.mjs";
import { getActivities } from "./get-activities.mjs";

/**
 * @Promise<void>
 * @throws {Error} if not all activities by that user were archived
 */
export const archiveAllActivities = async () => {
  const activities = await getActivities();
  const result = await Promise.allSettled(
    activities.map((activity) => {
      archiveActivity(activity.id);
    }),
  );
  const failed = result.filter((res) => res.status === "rejected");
  if (failed.length > 0) {
    throw new Error("Failed to archive all activities");
  }
};
