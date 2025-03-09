import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getUserImage = async (id: string | undefined) => {
  const userImage = await db.select().from(users).where(eq(users.id, id!));

  return userImage[0].universityCard;
};
