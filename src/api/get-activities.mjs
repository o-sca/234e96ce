import { client } from "./client.mjs";
import { activitySchema } from "./activity-schema.mjs";

/**
 * Return a list of activities.
 * @returns {Promise<import("zod").z.infer<typeof activitySchema>[]>} A list of activities.
 */
export const getActivities = async () => {
  const { status, data } = await client.get("/activities");
  if (status !== 200) {
    console.error(`Failed to fetch activities: ${status}`);
    return [];
  }

  /** @type import("zod").z.infer<typeof activitySchema>[]> */
  const parsed = [];
  for (const activity of data) {
    const result = activitySchema.safeParse(activity);
    if (result.success) {
      parsed.push(result.data);
    }
  }
  return parsed;
};
