import FilteredBookList from "@/components/FilteredBookList";
import Search from "@/components/Search";
import BookListSkeleton from "@/components/skeletons/BookListSkeleton";
import React, { Suspense } from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const searchParam = await searchParams;
  const query = searchParam?.query || "";
  return (
    <>
      <section className="dark:text-white text-gray-800 flex flex-col gap-6 items-center m-auto max-w-md mb-12">
        <h4 className="text-base uppercase tracking-wider">
          Discover Your Next Great Read:
        </h4>
        <h1 className="text-4xl font-semibold tracking-wide">
          Explore and Search for <br />
          <span className="dark:text-light-200 text-blue-900">Any Book</span> In
          Our Library
        </h1>
        <Search />
      </section>
      <Suspense key={query} fallback={<BookListSkeleton />}>
        <FilteredBookList title="Search result" filter={query} />
      </Suspense>
      {/* // <BookList title="Search result" books={latestBooks} /> */}
    </>
  );
};

export default Page;
