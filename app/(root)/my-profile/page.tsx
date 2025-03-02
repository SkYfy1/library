import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import React from "react";

const Page = async () => {
  // fetch user borrowed books - implement pls
  const bookArr = await db.select().from(books).limit(10);
  return (
    <>
      {/* Placeholder */}
      <BookList title="Borrowed Books" books={bookArr} />
    </>
  );
};

export default Page;
