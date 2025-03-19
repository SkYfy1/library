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

  console.log(bookData[0]);
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books"> Go back</Link>
      </Button>
      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};

export default Page;
