import { db } from "@/db/drizzle";
import { books, borrowRecords } from "@/db/schema";
import { desc, eq, ilike } from "drizzle-orm";

export const getBorrowedBooks = async (userId: string) => {
  // { bookId: borrowRecords.bookId }
  const bookIdsAndData = await db
    .select()
    .from(borrowRecords)
    .innerJoin(books, eq(borrowRecords.bookId, books.id))
    .where(eq(borrowRecords.userId, userId));

  if (!bookIdsAndData.length) {
    return { success: false, error: "You don't have borrowed books!" };
  }

  const bookArr = bookIdsAndData.map((elem) => ({
    ...elem.books,
    borrowInfo: {
      borrowDate: elem.borrow_records.borrowDate,
      dueDate: elem.borrow_records.dueDate,
    },
  }));

  return {
    success: true,
    data: bookArr,
  };
};

export const getFilteredBooks = async (filter: string) => {
  const latestBooks = (await db
    .select()
    .from(books)
    .where(ilike(books.title, `%${filter}%`))
    .orderBy(desc(books.createdAt))) as Book[];

  return latestBooks;
};
