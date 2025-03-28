import React from "react";
import BookList from "./BookList";
import { getFilteredBooks } from "@/lib/data/book";
import Image from "next/image";
import ClearQueryButton from "./ClearQueryButton";

const FilteredBookList = async ({
  filter,
  title,
}: {
  filter: string;
  title: string;
}) => {
  const books = await getFilteredBooks(filter);

  if (books.length < 2) {
    return (
      <>
        <h1 className="dark:text-light-100 text-gray-800 text-4xl">
          Result for{" "}
          <span className="dark:text-light-200 text-blue-900">{filter}</span>
        </h1>
        <section className="flex justify-center flex-col items-center mt-12 gap-6 max-w-96 m-auto">
          <Image
            src="/icons/nofound.svg"
            width={200}
            height={200}
            alt="not-found-image"
          />
          <h1 className="dark:text-light-100 text-gray-800 capitalize font-semibold text-2xl">
            No results found
          </h1>
          <p className="dark:text-light-100 text-gray-900 text-base">
            We couldn’t find any books matching your search.
            <br /> Try using different keywords or check for typos.
          </p>
          <ClearQueryButton
            className="uppercase font-bebas-neue text-lg book-overview_btn w-full py-6"
            text="Clear search"
          />
        </section>
      </>
    );
  }

  return (
    <>
      <BookList title={title} books={books} />
    </>
  );
};

export default FilteredBookList;
