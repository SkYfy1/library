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
  if (books.length < 2) return;

  return (
    <section
      className={cn(
        "bg-light-700 dark:bg-transparent p-4 rounded-2xl dark:p-0",
        containerClassName
      )}
    >
      <h2 className="font-bebas-neue text-4xl dark:text-light-100 text-gray-800">
        {title}
      </h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.title}
            {...book}
            isLoanedBook={book.borrowInfo && true}
            text={text}
          />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
