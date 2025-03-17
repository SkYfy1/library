"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const changeUserRole = async (id: string, role: string) => {
  if (role !== "ADMIN" && role !== "USER") {
    // return { success: false, message: "Недопустимая роль" };
    return;
  }

  await db.update(users).set({ role: role }).where(eq(users.id, id));

  revalidatePath("/admin/users");
};
