import Image from "next/image";
import React from "react";
import BookCover from "./BookCover";
import BorrowBook from "./BorrowBook";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import EventButton from "./EventButton";

type Props = {
  userId: string;
} & Book;

const BookOverview = async ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl,
  userId,
  id,
}: Props) => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const borrowingEligibility = {
    isEligible: availableCopies > 0 && user?.status === "APPROVED",
    message:
      availableCopies <= 0
        ? "Book is not available"
        : "You are not eligible to borrow this book",
  };

  const getPermission = async () => {
    "use server";
    toast("Admin have been notified");
  };

  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            By{" "}
            <span className="font-semibold dark:text-light-200 text-primary-admin">
              {author}
            </span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold dark:text-light-200 text-primary-admin">
              {genre}
            </span>
          </p>
          <div className="flex gap-1">
            <Image src="/icons/star.svg" alt="star" height={22} width={22} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="book-copies">
          <p>
            Total books:<span>{totalCopies}</span>
          </p>
          <p>
            Available books:<span>{availableCopies}</span>
          </p>
        </div>
        <p className="book-description">{description}</p>
        {borrowingEligibility.isEligible ? (
          <BorrowBook
            bookId={id}
            userId={userId}
            borrowingEligibility={borrowingEligibility}
          />
        ) : (
          // change color
          // implement asking for permission
          <div className="flex gap-8 items-center w-full">
            <h2 className="text-xl text-light-200 underline underline-offset-4">
              You don't have permission to borrow the book
            </h2>
            <EventButton handler={getPermission} text="Get permission" />
          </div>
        )}
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={coverColor}
            coverUrl={coverUrl}
          />
        </div>
        <div className="absolute left-16 md:left-16 xl:left-52 2xl:left-60 top-10 rotate-12 opacity-90 blur-md max-sm:hidden">
          <BookCover
            variant="wide"
            coverColor={coverColor}
            coverUrl={coverUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
