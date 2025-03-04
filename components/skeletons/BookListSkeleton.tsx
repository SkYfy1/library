import React from "react";
import BookCardSkeleton from "./BookCardSkeleton";

const BookListSkeleton = () => {
  return (
    <section>
      <h2 className="font-bebas-neue text-4xl bg-light-100 w-[200px] rounded-sm h-[38px] mb-12"></h2>
      <ul className="flex gap-10">
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <BookCardSkeleton key={el} />
        ))}
      </ul>
    </section>
  );
};

export default BookListSkeleton;
