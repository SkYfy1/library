import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getUsers = async () => {
  const userList = await db.select().from(users);

  return userList;
};
