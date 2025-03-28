import { Table } from "@/components/admin/table/Table";
import { Button } from "@/components/ui/button";
import { getBooks } from "@/lib/admin/data";
import Link from "next/link";
import React from "react";

const headers = ["title", "Author", "genre", "Date Created", "Action"];

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const search = await searchParams;
  const query = search?.query || "";
  const booksList = await getBooks(query);
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-2xl font-semibold dark:text-gray-800">All books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a New Book
          </Link>
        </Button>
      </div>
      <div className="mt-7 w-full overflow-hidden">
        <Table headers={headers} data={booksList} type="Books" size="default" />
      </div>
    </section>
  );
};

export default Page;
