import { client } from "./client.mjs";

export const resetActivities = async () => {
  const { status } = await client.patch("/reset");
  if (status !== 200) {
    throw new Error("Failed to reset activities");
  }
  return;
};
