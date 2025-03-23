import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";
import { cn, formatDate, getReturnDate } from "@/lib/utils";
import Image from "next/image";

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
  // isLoanedBook hz nado li
  const isOverDue =
    isLoanedBook && getReturnDate(borrowInfo?.dueDate as string) < 0;
  return (
    <li
      className={cn(
        isLoanedBook && "xs:w-64 w-full relative",
        containerClassName
      )}
    >
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col items-center")}
      >
        {isLoanedBook ? (
          <div
            className={`h-full p-4 rounded-sm`}
            style={{ backgroundColor: `${coverColor}70` }}
          >
            <BookCover coverColor={coverColor} coverUrl={coverUrl} />
          </div>
        ) : (
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
            {isOverDue && borrowInfo?.status === "BORROWED" && (
              <Image
                src="/icons/warning.svg"
                alt="Verified"
                width={36}
                height={36}
                className="object-contain absolute -left-2 -top-2 "
              />
            )}
            <div className="book-loaned">
              <div className="flex gap-1 items-center">
                <Image
                  src="/icons/book-2.svg"
                  alt="book-icon"
                  width={16}
                  height={16}
                />
                <p className="dark:text-light-100 text-gray-800">
                  Borrowed on {formatDate(borrowInfo?.dueDate.slice(5)!)}
                </p>
              </div>
              <div className="flex justify-between">
                {isOverDue && borrowInfo?.status === "BORROWED" ? (
                  <div className="flex gap-1">
                    <Image
                      src="/icons/warning.svg"
                      alt="Calendar"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                    <p className="text-base font-medium text-red-400">
                      Overdue Return
                    </p>
                  </div>
                ) : !isOverDue && borrowInfo?.status === "BORROWED" ? (
                  <div className="flex gap-1">
                    <Image
                      src="/icons/calendar.svg"
                      alt="Calendar"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                    <p className="text-base font-medium text-red-400">
                      {getReturnDate(borrowInfo?.dueDate as string)} days left
                      to due
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-1">
                    <Image
                      src="/icons/tick.svg"
                      alt="tick"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                    <p className="text-base dark:text-light-100">
                      Returned on{" "}
                      {formatDate(borrowInfo?.returnDate?.slice(5)!)}
                    </p>
                  </div>
                )}

                <div
                  className="p-1 rounded-sm"
                  style={{ backgroundColor: `${coverColor}70` }}
                >
                  <Image
                    src="/icons/receipt.svg"
                    alt="receipt"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Link>
    </li>
  );
};
export default BookCard;
