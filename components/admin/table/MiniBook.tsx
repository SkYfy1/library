"use client";

import React from "react";
import BookCover from "../../BookCover";
import Image from "next/image";

const MiniBook = ({ book }: { book: AdminBooks }) => {
  return (
    <div
      key={book.id}
      className="bg-gray-150 p-4 rounded-lg shadow flex flex-col gap-1"
    >
      <div className="flex items-center gap-3 text-sm">
        <BookCover
          className="h-16 w-12"
          coverColor={book.coverColor}
          coverUrl={book.coverUrl}
        />
        <div className="flex flex-col gap-1">
          <p className="dark:text-gray-800">{book.title} </p>
          <div className="flex gap-2 items-center text-gray-500">
            <span>By {book.author}</span>
            <div className="bg-gray-500 rounded-full size-1"></div>
            <span>By {book.genre}</span>
          </div>
          <div className="text-gray-500">
            <div className="flex gap-1 items-center">
              <Image
                src="/icons/admin/calendar.svg"
                width={16}
                height={16}
                loading="lazy"
                alt="calendar"
              />

              {book.createdAt?.toDateString().slice(4).split(" ").join("/")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniBook;
