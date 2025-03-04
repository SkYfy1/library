import React from "react";
import BookList from "./BookList";
import { getFilteredBooks } from "@/lib/data/book";

const FilteredBookList = async ({
  filter,
  title,
}: {
  filter: string;
  title: string;
}) => {
  const books = await getFilteredBooks(filter);
  return (
    <>
      <BookList title={title} books={books} />
    </>
  );
};

export default FilteredBookList;
