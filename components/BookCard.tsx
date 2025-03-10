import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";
import { cn, getReturnDate } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
  borrowInfo,
  text,
  containerClassName,
}: Book & { text: string | null; containerClassName: string }) => {
  // console.log(coverColor);
  return (
    <li className={cn(isLoanedBook && "xs:w-64 w-full", containerClassName)}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col items-center")}
      >
        {isLoanedBook && (
          <div
            className={`w-full h-full p-4 rounded-sm`}
            style={{ backgroundColor: `${coverColor}80` }}
          >
            <BookCover coverColor={coverColor} coverUrl={coverUrl} />
          </div>
        )}

        {!isLoanedBook && (
          <BookCover coverColor={coverColor} coverUrl={coverUrl} />
        )}

        {text !== "hidden" && (
          <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
            <p className="book-title">{title}</p>
            <p className="book-genre">{genre}</p>
          </div>
        )}

        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <div className="flex gap-2 mb-2">
                <Image
                  src="/icons/calendar.svg"
                  alt="Calendar"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <p className="dark:text-light-100 text-gray-800">
                  <span className="text-blue-600 dark:text-primary">
                    {getReturnDate(borrowInfo?.dueDate as string)}
                  </span>{" "}
                  days left to return
                </p>
              </div>
              {getReturnDate(borrowInfo?.dueDate as string) < 0 && (
                <p className="text-base font-medium text-red-800 underline underline-offset-2">
                  You are past the refund date
                </p>
              )}
            </div>
            <Button className="book-btn">Download receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
};
export default BookCard;
