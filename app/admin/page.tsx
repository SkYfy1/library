import { Table } from "@/components/admin/table/Table";
import BookTable from "@/components/BookTable";
import { Button } from "@/components/ui/button";
import { db } from "@/db/drizzle";
import { books } from "@/db/schema";
import {
  getAccountRequests,
  getBorrowedBooks,
  getUsers,
} from "@/lib/admin/data";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const booksList = await db.select().from(books);
  const users = await getUsers();
  const borrowedBooks = await getBorrowedBooks();
  const accounts = await getAccountRequests();
  return (
    <main>
      <section className="flex gap-4 w-full">
        <div className="p-4 bg-white w-full rounded-md">
          <h3 className="mb-4 text-sm text-gray-600">Borrowed books</h3>
          <h1 className="font-bold text-2xl">10</h1>
        </div>
        <div className="p-4 bg-white  w-full rounded-md">
          <h3 className="mb-4 text-sm text-gray-600">Total users</h3>
          <h1 className="font-bold text-2xl">10</h1>
        </div>
        <div className="p-4 bg-white  w-full rounded-md">
          <h3 className="mb-4 text-sm text-gray-600">Total books</h3>
          <h1 className="font-bold text-2xl">10</h1>
        </div>
      </section>
      <section className="grid grid-cols-6 grid-rows-2 gap-2 mt-4 h-[75vh]">
        {/*  */}
        <div className="col-span-3 row-span-1 rounded-md p-4 overflow-hidden bg-white after-gradient">
          <h1 className="mb-2 font-semibold text-lg">Recently added books</h1>
          <Table type="Borrow" size="small" data={borrowedBooks} />
        </div>
        {/*  */}
        <div className="col-span-3 row-span-1 rounded-md p-4 overflow-hidden bg-white after-gradient">
          <h1 className="mb-8 text-lg font-semibold">Account Requests</h1>
          <Table type="Account Request" size="small" data={accounts} />
        </div>
        {/*  */}
        <div className="col-start-4 row-start-1 col-span-3 row-span-2 rounded-md overflow-hidden p-4 flex flex-col gap-4 bg-white after-gradient">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Recently added books</h1>
            <Button className="bg-gray-50 text-purple-700 font-semibold">
              View All
            </Button>
          </div>
          <Link
            href="/admin/books"
            className="w-full bg-light-100 justify-start p-4 flex items-center gap-2 rounded-md font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 bg-white rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Book
          </Link>
          {/* <BookTable type="mini" /> */}
          <Table type="Books" size="small" data={booksList} />
        </div>
      </section>
    </main>
  );
};

export default Page;
