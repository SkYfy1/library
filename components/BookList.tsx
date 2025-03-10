import React from "react";
import BookCard from "./BookCard";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  books: Book[];
  text?: string | null;
  containerClassName?: string;
}

const BookList = ({ title, text = null, books, containerClassName }: Props) => {
  if (books?.length < 2) return null;

  return (
    <section
      className={cn(
        "bg-light-700 dark:bg-transparent p-4 rounded-2xl dark:p-0",
        containerClassName,
        title === "Borrowed Books" && "dark:p-8"
      )}
    >
      <h2 className="font-bebas-neue text-4xl dark:text-light-100 text-gray-800">
        {title}
      </h2>
      <ul
        className={cn(
          "book-list",
          title === "Borrowed Books" && "justify-between"
        )}
      >
        {books?.map((book) => (
          <BookCard
            key={book.title}
            {...book}
            isLoanedBook={book.borrowInfo && true}
            text={text}
            containerClassName={
              book.borrowInfo && true
                ? "p-6 dark:bg-gray-800 bg-gray-100 rounded-lg"
                : ""
            }
          />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
