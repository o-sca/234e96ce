import z from "zod";

export const activitySchema = z.object({
  direction: z.string(),
  from: z.number(),
  to: z.number(),
  via: z.number(),
  duration: z.number(),
  is_archived: z.boolean(),
  call_type: z.string(),
  id: z.string(),
  created_at: z.string().datetime(),
});

/**
 * @typedef {z.infer<typeof activitySchema>} Activity
 */
export const Activity = activitySchema;
