import { auth } from "@/auth";
import BookList from "@/components/BookList";
import Theme from "@/components/Theme";
import { getBorrowedBooks } from "@/lib/data/book";
import React from "react";

const Page = async () => {
  const session = await auth();
  const borrowData = await getBorrowedBooks(session?.user?.id!);

  return (
    <>
      <div className="mb-10">
        <h1 className="dark:text-white text-gray-700 font-medium">
          Change theme
        </h1>
        <Theme />
      </div>
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
