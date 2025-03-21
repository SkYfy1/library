import BookForm from "@/components/admin/forms/BookForm";
import { Button } from "@/components/ui/button";
import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const bookData = await db.select().from(books).where(eq(books.id, id));

  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">
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
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>{" "}
          Go back
        </Link>
      </Button>
      <section className="w-full max-w-2xl">
        <BookForm type="update" {...bookData[0]} />
      </section>
    </>
  );
};

export default Page;
