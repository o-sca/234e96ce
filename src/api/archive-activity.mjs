import { client } from "./client.mjs";

/**
 * @param {string} callId
 * @Promise<void>
 * @throws {Error} if status is not 200
 */
export const archiveActivity = async (callId) => {
  const { status } = await client.patch(`/activities/${callId}`, {
    is_archived: true,
  });
  if (status !== 200) {
    throw new Error("Failed to archive activity");
  }
};
