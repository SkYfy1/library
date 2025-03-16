import React from "react";
import { cn } from "@/lib/utils";
import TableList from "./TableList";
import MiniBook from "./MiniBook";
import MiniUser from "./MiniUser";
import MiniBorrowedBook from "./MiniBorrowedBook";
import MiniAcc from "./MiniAcc";

interface Props {
  headers?: string[];
  data: AdminBooks[] | AdminBorrowedBooks[] | AdminUsers[];
  type: "Books" | "Borrow" | "Users" | "Account Request";
  size?: "default" | "small";
}

export const Table = async ({
  headers,
  type,
  size = "default",
  data,
}: Props) => {
  if (size === "small") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 gap-4",
          type === "Account Request" && "grid-cols-3"
        )}
      >
        {data.map((el, ind) => {
          if (type === "Books")
            return <MiniBook key={ind} book={el as AdminBooks} />;
          if (type === "Users")
            return <MiniUser key={ind} user={el as AdminUsers} />;
          if (type === "Borrow")
            return (
              <MiniBorrowedBook key={ind} book={el as AdminBorrowedBooks} />
            );
          if (type === "Account Request")
            return <MiniAcc key={ind} account={el as AdminUsers} />;
        })}
      </div>
    );
  }
  return (
    <>
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-light-700">
            <tr>
              {headers?.map((text, ind) => (
                <th
                  key={text}
                  className={cn(
                    "p-6 text-sm font-semibold capitalize tracking-wide text-left",
                    ind === 0 ? "w-1/4" : "w-1/12"
                  )}
                >
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((book) => (
              <TableList key={book.id} type={type} data={book} />
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={cn(
          "md:hidden grid grid-cols-1 gap-4",
          type === "Account Request" && "grid-cols-2"
        )}
      >
        {data.map((el, ind) => {
          if (type === "Books")
            return <MiniBook key={ind} book={el as AdminBooks} />;
          if (type === "Users")
            return <MiniUser key={ind} user={el as AdminUsers} />;
          if (type === "Borrow")
            return (
              <MiniBorrowedBook key={ind} book={el as AdminBorrowedBooks} />
            );
          if (type === "Account Request")
            return <MiniAcc key={ind} account={el as AdminUsers} />;
        })}
      </div>
    </>
  );
};
