import Image from "next/image";
import React from "react";
import BookCover from "./BookCover";
import BorrowBook from "./BorrowBook";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

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

  if (!user) return null;

  const borrowingEligibility = {
    isEligible: availableCopies > 0 && user.status === "APPROVED",
    message:
      availableCopies <= 0
        ? "Book is not available"
        : "You are not eligible to borrow this book",
  };

  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
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
        <BorrowBook
          bookId={id}
          userId={userId}
          borrowingEligibility={borrowingEligibility}
        />
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
