import { client } from "./client.mjs";
import { activitySchema } from "./activity-schema.mjs";

/**
 * Return a list of activities.
 * @returns {Promise<z.infer<typeof activitySchema>[]>} A list of activities.
 */
export const getActivities = async () => {
  try {
    const { status, data } = await client.get("/activities");
    if (status !== 200) {
      console.error(`Failed to fetch activities: ${status}`);
      return [];
    }

    const parsed = data.map((activity) => {
      const result = activitySchema.safeParse(activity);
      if (!result.success) {
        console.error(result.error);
        return null;
      }
      return result.data;
    });
    return parsed;
  } catch (err) {
    console.error(err);
    return [];
  }
};
