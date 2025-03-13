import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import React from "react";
import BookCover from "./BookCover";
import MiniBook from "./admin/MiniBook";

// Depricated

const BookTable = async ({ type }: { type: string }) => {
  const booksList = await db.select().from(books);
  if (type === "mini") {
    return (
      <div className="grid grid-cols-1 gap-4">
        {booksList.map((book) => (
          <MiniBook book={book} />
        ))}
      </div>
    );
  }
  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full">
        <thead className="bg-light-700">
          <tr>
            <th className="p-6 w-3/6 text-sm font-semibold  tracking-wide text-left rounded-l-md">
              Book Title
            </th>
            <th className="p-6 w-1/12 text-sm font-semibold  tracking-wide text-left">
              Author
            </th>
            <th className="p-6 w-1/12 text-sm font-semibold  tracking-wide text-left">
              Genre
            </th>
            <th className="p-6 w-1/12 text-sm font-semibold  tracking-wide text-left">
              Date Created
            </th>
            <th className="p-6 w-1/12 text-sm font-semibold  tracking-wide text-center rounded-r-md">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book) => (
            <tr key={book.id}>
              <td className="p-6 text-sm tracking-wide font-semibold text-left">
                <div className="flex gap-2 items-center">
                  <BookCover
                    className="h-14 w-10"
                    coverColor={book.coverColor}
                    coverUrl={book.coverUrl}
                  />
                  <p>{book.title}</p>
                </div>
              </td>
              <td className="p-6 text-sm   tracking-wide font-semibold text-left">
                {book.author}
              </td>
              <td className="p-6 text-sm   tracking-wide font-semibold text-left">
                {book.genre}
              </td>
              <td className="p-6 text-sm  tracking-wide font-semibold text-left">
                {book.createdAt?.toDateString()}
              </td>
              <td className="p-6 text-sm tracking-wide flex gap-3 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-blue-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-red cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
