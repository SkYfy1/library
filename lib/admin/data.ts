import { db } from "@/db/drizzle";
import { books, borrowRecords, users } from "@/db/schema";
import { eq, ilike, or } from "drizzle-orm";

export const getUsers = async () => {
  const userList = await db.select().from(users);

  return userList;
};

export const getAccountRequests = async () => {
  const accounts = await db
    .select()
    .from(users)
    .where(eq(users.status, "PENDING"));

  return accounts;
};

export const getBooks = async (filter: string) => {
  // const bookList = await db.select().from(books);
  const bookList = await db
    .select()
    .from(books)
    .where(
      or(
        ilike(books.author, `%${filter}%`),
        ilike(books.title, `%${filter}%`),
        ilike(books.genre, `%${filter}%`)
      )
    );

  return bookList;
};

export const getBook = async (id: string) => {
  const book = await db.select().from(books).where(eq(books.id, id));

  return book[0];
};

export const getBorrowedBooks = async () => {
  const booksList = await db.select().from(borrowRecords);

  // const user = await Promise.all(
  //   booksList.map(async (borrow) => {
  //     const userData = await db
  //       .select()
  //       .from(users)
  //       .where(eq(users.id, borrow.userId));
  //     return {
  //       userName: userData[0].fullName,
  //       userId: userData[0].id,
  //       userCard: userData[0].universityCard,
  //       bookId: borrow.id
  //     };
  //   })
  // );

  const data = await Promise.all(
    booksList.map(async (borrow) => {
      const userData = await db
        .select()
        .from(users)
        .where(eq(users.id, borrow.userId));

      const bookData = await db
        .select()
        .from(books)
        .where(eq(books.id, borrow.bookId));

      return {
        ...borrow,
        userData: {
          fullName: userData[0].fullName,
          id: userData[0].id,
          email: userData[0].email,
          universityCard: userData[0].universityCard,
          // bookId: borrow.id,
        },
        bookData: {
          title: bookData[0].title,
          coverUrl: bookData[0].coverUrl,
          coverColor: bookData[0].coverColor,
          author: bookData[0].author,
          genre: bookData[0].genre,
        },
      };
    })
  );

  return data;

  // // return [booksList, user];
  // return booksList.map((el) => ({ ...el, userId: user }));
};
