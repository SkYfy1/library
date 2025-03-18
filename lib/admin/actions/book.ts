"use server";

import { db } from "@/db/drizzle";
import { books, borrowRecords, users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addBook = async (params: BookParams) => {
  try {
    const newBook = await db
      .insert(books)
      .values({ ...params, availableCopies: params.totalCopies })
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while adding the book",
    };
  }
};

export const updateBookStatus = async (id: string, value: string) => {
  if (value !== "RETURNED" && value !== "BORROWED") {
    // return { success: false, message: "Недопустимая роль" };
    return;
  }
  try {
    await db
      .update(borrowRecords)
      .set({ status: value, returnDate: sql`NOW()` })
      .where(eq(borrowRecords.id, id));

    revalidatePath("/admin/borrow-records");

    return { success: true, message: "Status updated" };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while updating book status",
    };
  }
};
