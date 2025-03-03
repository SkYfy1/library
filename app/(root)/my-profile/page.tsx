import { auth } from "@/auth";
import BookList from "@/components/BookList";
import { getBorrowedBooks } from "@/lib/data/book";
import React from "react";

const Page = async () => {
  const session = await auth();
  const borrowData = await getBorrowedBooks(session?.user?.id!);

  return (
    <>
      {/* Placeholder */}
      <BookList
        title="Borrowed Books"
        books={borrowData.data!}
        containerClassName="w-full"
      />
    </>
  );
};

export default Page;
