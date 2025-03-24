import React from "react";
import BookCover from "@/components/BookCover";
import UserAvatar from "@/components/Avatar";
import Image from "next/image";

const MiniBorrowedBook = ({ book }: { book: AdminBorrowedBooks }) => {
  return (
    <div
      key={book.id}
      className="bg-gray-150 p-4 rounded-lg shadow flex flex-col gap-1 relative"
    >
      <div className="flex items-center gap-3 text-sm">
        <BookCover
          className="md:h-16 md:w-12 h-12 w-8"
          coverColor={book.bookData.coverColor}
          coverUrl={book.bookData.coverUrl}
        />
        <div className="flex flex-col gap-1">
          <p className="dark:text-gray-800">{book.bookData.title} </p>
          <div className="flex gap-2 items-center text-gray-500">
            <span>By {book.bookData.author}</span>
            <div className="bg-gray-500 rounded-full size-1"></div>
            <span>By {book.bookData.genre}</span>
          </div>
          <div className="text-gray-500 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <UserAvatar
                className="size-6"
                url={book.userData.universityCard}
              />
              <span className="text-black">{book.userData.fullName}</span>
            </div>
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
      <Image
        src="/icons/admin/eye.svg"
        width={32}
        height={32}
        className="rounded-md p-1 z-50 absolute top-5 right-5 cursor-pointer bg-white"
        loading="lazy"
        alt="eye"
      />
    </div>
  );
};

export default MiniBorrowedBook;
