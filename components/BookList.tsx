import React from "react";
import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[];
  text?: string | null;
  containerClassName?: string;
}

const BookList = ({ title, text = null, books, containerClassName }: Props) => {
  if (books.length < 2) return;

  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
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
