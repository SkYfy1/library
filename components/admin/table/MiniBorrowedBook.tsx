import React from "react";
import BookCover from "@/components/BookCover";
import UserAvatar from "@/components/Avatar";

const MiniBorrowedBook = ({ book }: { book: AdminBorrowedBooks }) => {
  return (
    <div
      key={book.id}
      className="bg-gray-150 p-4 rounded-lg shadow flex flex-col gap-1 relative"
    >
      <div className="flex items-center gap-3 text-sm">
        <BookCover
          className="h-16 w-12"
          coverColor={book.bookData.coverColor}
          coverUrl={book.bookData.coverUrl}
        />
        <div className="flex flex-col gap-1">
          <p>{book.bookData.title} </p>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>

              {book.createdAt?.toDateString().slice(4).split(" ").join("/")}
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 rounded-md p-1 absolute top-5 right-5 cursor-pointer bg-white text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </div>
  );
};

export default MiniBorrowedBook;
