"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const changeUserRole = async (id: string, role: string) => {
  if (role !== "ADMIN" && role !== "USER") {
    return;
  }
  try {
    await db.update(users).set({ role: role }).where(eq(users.id, id));

    revalidatePath("/admin/users");

    return { success: true, message: "User role updated" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "User role not updated" };
  }
};

export const verifyUser = async (id: string, value: string) => {
  if (value !== "REJECTED" && value !== "APPROVED") {
    return;
  }
  try {
    await db.update(users).set({ status: value }).where(eq(users.id, id));

    revalidatePath("/admin/account-requests");

    return { success: true, message: `User ${value}` };
  } catch (error) {
    console.log(error);
    return { success: false, message: "User status not updated" };
  }
};
